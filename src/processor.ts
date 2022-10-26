import {lookupArchive} from "@subsquid/archive-registry"
import {BatchContext, BatchProcessorItem, EvmLogEvent, SubstrateBatchProcessor, SubstrateBlock} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import { ethers } from "ethers"
import {Contract, Owner, Token, Transfer} from "./model"
import * as gromlins from "./abi/gromlins"

const contractAddress = "0xF27A6C72398eb7E25543d19fda370b7083474735";

const processor = new SubstrateBatchProcessor()
    .setBatchSize(500)
    .setBlockRange({ from: 1777560 })
    .setDataSource({
        // Lookup archive by the network name in the Subsquid registry
        archive: lookupArchive("moonbeam", {release: "FireSquid"}),
        chain: "wss://moonbeam-rpc.dwellir.com"
    })
    .addEvmLog(contractAddress, {
        filter: [gromlins.events["Transfer(address,address,uint256)"].topic],
    });


type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>


processor.run(new TypeormDatabase(), async ctx => {

    const transferData: TransferData[] = [];
    for (const block of ctx.blocks) {
        for (const item of block.items) {
            if (item.name === "EVM.Log") {
                const transfer = handleTransfer(ctx, block.header, item.event);
                transferData.push(transfer);
            }
        }
    }

    await saveTransfers(ctx, transferData);
})

type TransferData = {
    id: string;
    from: string;
    to: string;
    token: ethers.BigNumber;
    timestamp: bigint;
    block: number;
    transactionHash: string;
};

function handleTransfer(
    ctx: Ctx,
    block: SubstrateBlock,
    event: EvmLogEvent,
): TransferData {

    const evmLog = ((event.args.log || event.args));
    const {from, to, tokenId} = gromlins.events["Transfer(address,address,uint256)"].decode(evmLog);

    const transfer = {
        id: event.id,
        token: tokenId,
        from,
        to,
        timestamp: BigInt(block.timestamp),
        block: block.height,
        transactionHash: event.evmTxHash,
    }

    return transfer;
};

async function saveTransfers(ctx: Ctx, transferData: TransferData[]) {
    const tokenIds: Set<string> = new Set();
    const ownerIds: Set<string> = new Set();

    for (const td of transferData) {
        tokenIds.add(td.token.toString());
        ownerIds.add(td.from);
        ownerIds.add(td.to);
    }

    const tokens: Map<string, Token> = new Map(
        (await ctx.store.findBy(Token, { id: In([...tokenIds]) })).map((token) => [token.id, token])
    );

    const owners: Map<string, Owner> = new Map(
        (await ctx.store.findBy(Owner, { id: In([...ownerIds]) })).map((owner) => [owner.id, owner])
    );

    let contractEntity = await ctx.store.get(Contract, contractAddress);
    if (contractEntity == null) {
        contractEntity = new Contract({
            id: contractAddress,
            name: "Gromlins",
            symbol: "GROMLIN",
            totalSupply: 3333n,
        })
        await ctx.store.insert(contractEntity);
    }

    const transfers: Set<Transfer> = new Set();
    for (const td of transferData) {
        const contract = new gromlins.Contract(
            ctx,
            { height: td.block },
            contractAddress
        );

        let from = owners.get(td.from);
        if (from == null) {
            from = new Owner({ id: td.from});
            owners.set(from.id, from);
        }

        let to = owners.get(td.to);
        if (to == null) {
            to = new Owner({id: td.to});
            owners.set(to.id, to);
        }

        const tokenId = td.token.toString();

        let token = tokens.get(tokenId);
        if (token == null) {
            token = new Token({
                id: tokenId,
                uri: await contract.tokenURI(td.token),
                owner: to,
                contract: contractEntity,
            });
            tokens.set(token.id, token);
        }

        const transfer  = new Transfer({
            id: td.id,
            block: td.block,
            timestamp: td.timestamp,
            transactionHash: td.transactionHash,
            from,
            to,
            token
        });

        transfers.add(transfer);
    }

    await ctx.store.save([...owners.values()]);
    await ctx.store.save([...tokens.values()]);
    await ctx.store.save([...transfers]);
}
