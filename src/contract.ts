import { assertNotNull, Store } from "@subsquid/substrate-evm-processor";
import { ethers } from "ethers";
import * as erc721 from "./abi/erc721";
import { Contract } from "./model";
 
export const CHAIN_NODE = "wss://wss.api.moonbeam.network";

export const contract = new ethers.Contract(
  "0x7d5F0398549C9fDEa03BbDde388361827cb376D5",
  erc721.abi,
  new ethers.providers.WebSocketProvider(assertNotNull(CHAIN_NODE))
);
 
export function createContractEntity(): Contract {
  return new Contract({
    id: contract.address,
    name: "Moonsama",
    symbol: "MSAMA",
    totalSupply: 1000n,
  });
}
 
let contractEntity: Contract | undefined;
 
export async function getContractEntity({
  store,
}: {
  store: Store;
}): Promise<Contract> {
  if (contractEntity == null) {
    contractEntity = await store.get(Contract, contract.address);
  }
  return assertNotNull(contractEntity);
}
 
