import * as ss58 from "@subsquid/ss58";
import {
  EventHandlerContext,
  EvmLogHandlerContext,
  Store,
  SubstrateEvmProcessor,
  toHex, 
} from "@subsquid/substrate-evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import { CHAIN_NODE, contract, createContractEntity, getContractEntity } from "./contract";
import { events } from "./abi/erc721";
import { Owner, Token, Transfer, Account, HistoricalBalance,} from "./model";
import { BalancesTransferEvent } from "./types/events";

const processor = new SubstrateEvmProcessor("erc721");

processor.setDataSource({
  chain: CHAIN_NODE,
  archive: lookupArchive("moonriver")[0].url,
});

processor.setBatchSize(500);

processor.addPreHook({ range: { from: 0, to: 0 } }, async (ctx) => {
  await ctx.store.save(createContractEntity());
});

processor.addEvmLogHandler(
  contract.address,
  {
    filter: [events["Transfer(address,address,uint256)"].topic],
  },
  processTransfer
);
processor.addEventHandler("balances.Transfer", async (ctx) => {
  const transfer = getTransferEvent(ctx);
  const tip = ctx.extrinsic?.tip || 0n;

  const fromAcc = await getOrCreate(ctx.store, Account, toHex(transfer.from));
  fromAcc.balance = fromAcc.balance || 0n;
  fromAcc.balance -= transfer.amount;
  fromAcc.balance -= tip;
  await ctx.store.save(fromAcc);

  const toAcc = await getOrCreate(ctx.store, Account, toHex(transfer.to));
  toAcc.balance = toAcc.balance || 0n;
  toAcc.balance += transfer.amount;
  await ctx.store.save(toAcc);

  await ctx.store.save(
    new HistoricalBalance({
      id: `${ctx.event.id}-to`,
      account: fromAcc,
      balance: fromAcc.balance,
      date: new Date(ctx.block.timestamp),
    })
  );

  await ctx.store.save(
    new HistoricalBalance({
      id: `${ctx.event.id}-from`,
      account: toAcc,
      balance: toAcc.balance,
      date: new Date(ctx.block.timestamp),
    })
  );
});

processor.run();

async function processTransfer(ctx: EvmLogHandlerContext): Promise<void> {
  const transfer =
    events["Transfer(address,address,uint256)"].decode(ctx);

  let from = await ctx.store.get(Owner, transfer.from);
  if (from == null) {
    from = new Owner({ id: transfer.from, balance: 0n });
    await ctx.store.save(from);
  }

  let to = await ctx.store.get(Owner, transfer.to);
  if (to == null) {
    to = new Owner({ id: transfer.to, balance: 0n });
    await ctx.store.save(to);
  }

  let token = await ctx.store.get(Token, transfer.tokenId.toString());
  if (token == null) {
    token = new Token({
      id: transfer.tokenId.toString(),
      uri: await contract.tokenURI(transfer.tokenId),
      contract: await getContractEntity(ctx),
      owner: to,
    });
    await ctx.store.save(token);
  } else {
    token.owner = to;
    await ctx.store.save(token);
  }

  await ctx.store.save(
    new Transfer({
      id: ctx.txHash,
      token,
      from,
      to,
      timestamp: BigInt(ctx.substrate.block.timestamp),
      block: ctx.substrate.block.height,
      transactionHash: ctx.txHash,
    })
  );
}

interface TransferEvent {
  from: Uint8Array;
  to: Uint8Array;
  amount: bigint;
}

function getTransferEvent(ctx: EventHandlerContext): TransferEvent {
  const event = new BalancesTransferEvent(ctx);
  if (event.isV49) {
    const [from, to, amount] = event.asV49;
    return { from, to, amount };
  }
  if (event.isV1201) {
    const {from, to, amount} = event.asV1201;
    return { from, to, amount };
  } 
  throw new Error("Runtime version not found");
}

async function getOrCreate<T extends { id: string }>(
  store: Store,
  EntityConstructor: EntityConstructor<T>,
  id: string
): Promise<T> {
  let entity = await store.get<T>(EntityConstructor, {
    where: { id },
  });

  if (entity == null) {
    entity = new EntityConstructor();
    entity.id = id;
  }

  return entity;
}

type EntityConstructor<T> = {
  new (...args: any[]): T;
};
