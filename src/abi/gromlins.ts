import * as ethers from "ethers";
import assert from "assert";

export const abi = new ethers.utils.Interface(getJsonAbi());

export type Approval0Event = ([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})

export type ApprovalForAll0Event = ([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})

export type Lock0Event = ([supply: ethers.BigNumber] & {supply: ethers.BigNumber})

export type RoleAdminChanged0Event = ([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})

export type RoleGranted0Event = ([role: string, account: string, sender: string] & {role: string, account: string, sender: string})

export type RoleRevoked0Event = ([role: string, account: string, sender: string] & {role: string, account: string, sender: string})

export type SecondarySaleFee0Event = ([feeRecipient: string, feeValueBps: ethers.BigNumber] & {feeRecipient: string, feeValueBps: ethers.BigNumber})

export type Transfer0Event = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type URI0Event = ([tokenId: ethers.BigNumber] & {tokenId: ethers.BigNumber})

export interface EvmLog {
  data: string;
  topics: string[];
}

function decodeEvent(signature: string, data: EvmLog): any {
  return abi.decodeEventLog(
    abi.getEvent(signature),
    data.data || "",
    data.topics
  );
}

export const events = {
  "Approval(address,address,uint256)": {
    topic: abi.getEventTopic("Approval(address,address,uint256)"),
    decode(data: EvmLog): Approval0Event {
      return decodeEvent("Approval(address,address,uint256)", data)
    }
  }
  ,
  "ApprovalForAll(address,address,bool)": {
    topic: abi.getEventTopic("ApprovalForAll(address,address,bool)"),
    decode(data: EvmLog): ApprovalForAll0Event {
      return decodeEvent("ApprovalForAll(address,address,bool)", data)
    }
  }
  ,
  "ContractURI()": {
    topic: abi.getEventTopic("ContractURI()"),
  }
  ,
  "Lock(uint256)": {
    topic: abi.getEventTopic("Lock(uint256)"),
    decode(data: EvmLog): Lock0Event {
      return decodeEvent("Lock(uint256)", data)
    }
  }
  ,
  "RoleAdminChanged(bytes32,bytes32,bytes32)": {
    topic: abi.getEventTopic("RoleAdminChanged(bytes32,bytes32,bytes32)"),
    decode(data: EvmLog): RoleAdminChanged0Event {
      return decodeEvent("RoleAdminChanged(bytes32,bytes32,bytes32)", data)
    }
  }
  ,
  "RoleGranted(bytes32,address,address)": {
    topic: abi.getEventTopic("RoleGranted(bytes32,address,address)"),
    decode(data: EvmLog): RoleGranted0Event {
      return decodeEvent("RoleGranted(bytes32,address,address)", data)
    }
  }
  ,
  "RoleRevoked(bytes32,address,address)": {
    topic: abi.getEventTopic("RoleRevoked(bytes32,address,address)"),
    decode(data: EvmLog): RoleRevoked0Event {
      return decodeEvent("RoleRevoked(bytes32,address,address)", data)
    }
  }
  ,
  "SecondarySaleFee(address,uint256)": {
    topic: abi.getEventTopic("SecondarySaleFee(address,uint256)"),
    decode(data: EvmLog): SecondarySaleFee0Event {
      return decodeEvent("SecondarySaleFee(address,uint256)", data)
    }
  }
  ,
  "Transfer(address,address,uint256)": {
    topic: abi.getEventTopic("Transfer(address,address,uint256)"),
    decode(data: EvmLog): Transfer0Event {
      return decodeEvent("Transfer(address,address,uint256)", data)
    }
  }
  ,
  "URI(uint256)": {
    topic: abi.getEventTopic("URI(uint256)"),
    decode(data: EvmLog): URI0Event {
      return decodeEvent("URI(uint256)", data)
    }
  }
  ,
  "URIAll()": {
    topic: abi.getEventTopic("URIAll()"),
  }
  ,
}

export type Approve0Function = ([to: string, tokenId: ethers.BigNumber] & {to: string, tokenId: ethers.BigNumber})

export type Batch0Function = ([calls: string, revertOnFail: boolean] & {calls: string, revertOnFail: boolean})

export type Burn0Function = ([tokenId: ethers.BigNumber] & {tokenId: ethers.BigNumber})

export type GrantRole0Function = ([role: string, account: string] & {role: string, account: string})

export type Initialize0Function = ([owner: string, admin: string, minter: string, name: string, symbol: string, _decimals: number, _contractURI: string, _defaultTokenURI: string, _proxyRegistryAddress: string] & {owner: string, admin: string, minter: string, name: string, symbol: string, _decimals: number, _contractURI: string, _defaultTokenURI: string, _proxyRegistryAddress: string})

export type Mint0Function = ([to: string, _customTokenURI: string] & {to: string, _customTokenURI: string})

export type MintDefault0Function = ([to: string] & {to: string})

export type RenounceRole0Function = ([role: string, account: string] & {role: string, account: string})

export type RevokeRole0Function = ([role: string, account: string] & {role: string, account: string})

export type SafeTransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})

export type SafeTransferFrom1Function = ([from: string, to: string, tokenId: ethers.BigNumber, data: string] & {from: string, to: string, tokenId: ethers.BigNumber, data: string})

export type SetApprovalForAll0Function = ([operator: string, approved: boolean] & {operator: string, approved: boolean})

export type SetContractURI0Function = ([contractURI: string] & {contractURI: string})

export type SetCustomCompositeTokenURIBase0Function = ([_id: ethers.BigNumber, _customCompositeTokenURIBase: string] & {_id: ethers.BigNumber, _customCompositeTokenURIBase: string})

export type SetCustomTokenURI0Function = ([_id: ethers.BigNumber, _customTokenURI: string] & {_id: ethers.BigNumber, _customTokenURI: string})

export type SetDefaultTokenURI0Function = ([_defaultTokenURI: string] & {_defaultTokenURI: string})

export type SetERC2665Handler0Function = ([_erc2665Handler: string] & {_erc2665Handler: string})

export type SetFee0Function = ([_feeRecipient: string, _feeValueBps: ethers.BigNumber] & {_feeRecipient: string, _feeValueBps: ethers.BigNumber})

export type SetGlobalCompositeTokenURIBase0Function = ([_globalCompositeTokenURIBase: string] & {_globalCompositeTokenURIBase: string})

export type SetProxyRegistryAddress0Function = ([_proxyRegistryAddress: string] & {_proxyRegistryAddress: string})

export type SetTransferListener0Function = ([_transferListener: string] & {_transferListener: string})

export type SetUseCompositeTokenURI0Function = ([_id: ethers.BigNumber, _useComposite: boolean] & {_id: ethers.BigNumber, _useComposite: boolean})

export type TransferFrom0Function = ([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})


function decodeFunction(data: string): any {
  return abi.decodeFunctionData(data.slice(0, 10), data)
}

export const functions = {
  "approve(address,uint256)": {
    sighash: abi.getSighash("approve(address,uint256)"),
    decode(input: string): Approve0Function {
      return decodeFunction(input)
    }
  }
  ,
  "batch(bytes[],bool)": {
    sighash: abi.getSighash("batch(bytes[],bool)"),
    decode(input: string): Batch0Function {
      return decodeFunction(input)
    }
  }
  ,
  "burn(uint256)": {
    sighash: abi.getSighash("burn(uint256)"),
    decode(input: string): Burn0Function {
      return decodeFunction(input)
    }
  }
  ,
  "grantRole(bytes32,address)": {
    sighash: abi.getSighash("grantRole(bytes32,address)"),
    decode(input: string): GrantRole0Function {
      return decodeFunction(input)
    }
  }
  ,
  "initialize(address,address,address,string,string,uint8,string,string,address)": {
    sighash: abi.getSighash("initialize(address,address,address,string,string,uint8,string,string,address)"),
    decode(input: string): Initialize0Function {
      return decodeFunction(input)
    }
  }
  ,
  "lock()": {
    sighash: abi.getSighash("lock()"),
  }
  ,
  "mint(address,string)": {
    sighash: abi.getSighash("mint(address,string)"),
    decode(input: string): Mint0Function {
      return decodeFunction(input)
    }
  }
  ,
  "mintDefault(address)": {
    sighash: abi.getSighash("mintDefault(address)"),
    decode(input: string): MintDefault0Function {
      return decodeFunction(input)
    }
  }
  ,
  "renounceRole(bytes32,address)": {
    sighash: abi.getSighash("renounceRole(bytes32,address)"),
    decode(input: string): RenounceRole0Function {
      return decodeFunction(input)
    }
  }
  ,
  "revokeRole(bytes32,address)": {
    sighash: abi.getSighash("revokeRole(bytes32,address)"),
    decode(input: string): RevokeRole0Function {
      return decodeFunction(input)
    }
  }
  ,
  "safeTransferFrom(address,address,uint256)": {
    sighash: abi.getSighash("safeTransferFrom(address,address,uint256)"),
    decode(input: string): SafeTransferFrom0Function {
      return decodeFunction(input)
    }
  }
  ,
  "safeTransferFrom(address,address,uint256,bytes)": {
    sighash: abi.getSighash("safeTransferFrom(address,address,uint256,bytes)"),
    decode(input: string): SafeTransferFrom1Function {
      return decodeFunction(input)
    }
  }
  ,
  "setApprovalForAll(address,bool)": {
    sighash: abi.getSighash("setApprovalForAll(address,bool)"),
    decode(input: string): SetApprovalForAll0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setContractURI(string)": {
    sighash: abi.getSighash("setContractURI(string)"),
    decode(input: string): SetContractURI0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setCustomCompositeTokenURIBase(uint256,string)": {
    sighash: abi.getSighash("setCustomCompositeTokenURIBase(uint256,string)"),
    decode(input: string): SetCustomCompositeTokenURIBase0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setCustomTokenURI(uint256,string)": {
    sighash: abi.getSighash("setCustomTokenURI(uint256,string)"),
    decode(input: string): SetCustomTokenURI0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setDefaultTokenURI(string)": {
    sighash: abi.getSighash("setDefaultTokenURI(string)"),
    decode(input: string): SetDefaultTokenURI0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setERC2665Handler(address)": {
    sighash: abi.getSighash("setERC2665Handler(address)"),
    decode(input: string): SetERC2665Handler0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setFee(address,uint256)": {
    sighash: abi.getSighash("setFee(address,uint256)"),
    decode(input: string): SetFee0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setGlobalCompositeTokenURIBase(string)": {
    sighash: abi.getSighash("setGlobalCompositeTokenURIBase(string)"),
    decode(input: string): SetGlobalCompositeTokenURIBase0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setProxyRegistryAddress(address)": {
    sighash: abi.getSighash("setProxyRegistryAddress(address)"),
    decode(input: string): SetProxyRegistryAddress0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setTransferListener(address)": {
    sighash: abi.getSighash("setTransferListener(address)"),
    decode(input: string): SetTransferListener0Function {
      return decodeFunction(input)
    }
  }
  ,
  "setUseCompositeTokenURI(uint256,bool)": {
    sighash: abi.getSighash("setUseCompositeTokenURI(uint256,bool)"),
    decode(input: string): SetUseCompositeTokenURI0Function {
      return decodeFunction(input)
    }
  }
  ,
  "transferFrom(address,address,uint256)": {
    sighash: abi.getSighash("transferFrom(address,address,uint256)"),
    decode(input: string): TransferFrom0Function {
      return decodeFunction(input)
    }
  }
  ,
}

interface ChainContext  {
  _chain: Chain
}

interface BlockContext  {
  _chain: Chain
  block: Block
}

interface Block  {
  height: number
}

interface Chain  {
  client:  {
    call: <T=any>(method: string, params?: unknown[]) => Promise<T>
  }
}

export class Contract  {
  private readonly _chain: Chain
  private readonly blockHeight: number
  readonly address: string

  constructor(ctx: BlockContext, address: string)
  constructor(ctx: ChainContext, block: Block, address: string)
  constructor(ctx: BlockContext, blockOrAddress: Block | string, address?: string) {
    this._chain = ctx._chain
    if (typeof blockOrAddress === 'string')  {
      this.blockHeight = ctx.block.height
      this.address = ethers.utils.getAddress(blockOrAddress)
    }
    else  {
      assert(address != null)
      this.blockHeight = blockOrAddress.height
      this.address = ethers.utils.getAddress(address)
    }
  }

  async COMPOSITE_CREATOR_ROLE(): Promise<string> {
    return this.call("COMPOSITE_CREATOR_ROLE", [])
  }

  async DEFAULT_ADMIN_ROLE(): Promise<string> {
    return this.call("DEFAULT_ADMIN_ROLE", [])
  }

  async GOVERNANCE_ROLE(): Promise<string> {
    return this.call("GOVERNANCE_ROLE", [])
  }

  async MINTER_ROLE(): Promise<string> {
    return this.call("MINTER_ROLE", [])
  }

  async OPERATOR_ROLE(): Promise<string> {
    return this.call("OPERATOR_ROLE", [])
  }

  async VERSION(): Promise<ethers.BigNumber> {
    return this.call("VERSION", [])
  }

  async balanceOf(owner: string): Promise<ethers.BigNumber> {
    return this.call("balanceOf", [owner])
  }

  async compositeURI(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("compositeURI", [tokenId])
  }

  async contractURI(): Promise<string> {
    return this.call("contractURI", [])
  }

  async decimals(): Promise<number> {
    return this.call("decimals", [])
  }

  async defaultTokenURI(): Promise<string> {
    return this.call("defaultTokenURI", [])
  }

  async erc2665Handler(): Promise<string> {
    return this.call("erc2665Handler", [])
  }

  async exists(tokenId: ethers.BigNumber): Promise<boolean> {
    return this.call("exists", [tokenId])
  }

  async getApproved(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("getApproved", [tokenId])
  }

  async getRoleAdmin(role: string): Promise<string> {
    return this.call("getRoleAdmin", [role])
  }

  async getRoleMember(role: string, index: ethers.BigNumber): Promise<string> {
    return this.call("getRoleMember", [role, index])
  }

  async getRoleMemberCount(role: string): Promise<ethers.BigNumber> {
    return this.call("getRoleMemberCount", [role])
  }

  async getTransferFee(_tokenId: ethers.BigNumber): Promise<ethers.BigNumber>
  async getTransferFee(_tokenId: ethers.BigNumber,_currencySymbol: string): Promise<ethers.BigNumber>
  async getTransferFee(...args: any[]) {
    return this.call("getTransferFee", args)
  }

  async globalCompositeTokenURIBase(): Promise<string> {
    return this.call("globalCompositeTokenURIBase", [])
  }

  async hasRole(role: string, account: string): Promise<boolean> {
    return this.call("hasRole", [role, account])
  }

  async initialized(): Promise<boolean> {
    return this.call("initialized", [])
  }

  async isApprovedForAll(_owner: string, _operator: string): Promise<boolean> {
    return this.call("isApprovedForAll", [_owner, _operator])
  }

  async isProxy(_address: string, _operator: string): Promise<boolean> {
    return this.call("isProxy", [_address, _operator])
  }

  async lockedForever(): Promise<boolean> {
    return this.call("lockedForever", [])
  }

  async name(): Promise<string> {
    return this.call("name", [])
  }

  async originalURI(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("originalURI", [tokenId])
  }

  async ownerOf(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("ownerOf", [tokenId])
  }

  async proxyRegistry(): Promise<string> {
    return this.call("proxyRegistry", [])
  }

  async royaltyInfo(arg0: ethers.BigNumber, _salePrice: ethers.BigNumber): Promise<([receiver: string, royaltyAmount: ethers.BigNumber] & {receiver: string, royaltyAmount: ethers.BigNumber})> {
    return this.call("royaltyInfo", [arg0, _salePrice])
  }

  async secondarySaleFee(arg0: ethers.BigNumber): Promise<[string, ethers.BigNumber]> {
    return this.call("secondarySaleFee", [arg0])
  }

  async supportsInterface(interfaceId: string): Promise<boolean> {
    return this.call("supportsInterface", [interfaceId])
  }

  async symbol(): Promise<string> {
    return this.call("symbol", [])
  }

  async tokenURI(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("tokenURI", [tokenId])
  }

  async totalSupply(): Promise<ethers.BigNumber> {
    return this.call("totalSupply", [])
  }

  async transferListener(): Promise<string> {
    return this.call("transferListener", [])
  }

  async uri(tokenId: ethers.BigNumber): Promise<string> {
    return this.call("uri", [tokenId])
  }

  private async call(name: string, args: any[]) : Promise<any> {
    const fragment = abi.getFunction(name)
    const data = abi.encodeFunctionData(fragment, args)
    const result = await this._chain.client.call('eth_call', [{to: this.address, data}, this.blockHeight])
    const decoded = abi.decodeFunctionResult(fragment, result)
    return decoded.length > 1 ? decoded : decoded[0]
  }
}

function getJsonAbi(): any {
  return [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "ContractURI",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "supply",
          "type": "uint256"
        }
      ],
      "name": "Lock",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "feeRecipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feeValueBps",
          "type": "uint256"
        }
      ],
      "name": "SecondarySaleFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "URIAll",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "COMPOSITE_CREATOR_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "GOVERNANCE_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MINTER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "OPERATOR_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "VERSION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "calls",
          "type": "bytes[]"
        },
        {
          "internalType": "bool",
          "name": "revertOnFail",
          "type": "bool"
        }
      ],
      "name": "batch",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "compositeURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defaultTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "erc2665Handler",
      "outputs": [
        {
          "internalType": "contract IERC2665Handler",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleMemberCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getTransferFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_currencySymbol",
          "type": "string"
        }
      ],
      "name": "getTransferFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "globalCompositeTokenURIBase",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_contractURI",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_defaultTokenURI",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_proxyRegistryAddress",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isProxy",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockedForever",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_customTokenURI",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "mintDefault",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "originalURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxyRegistry",
      "outputs": [
        {
          "internalType": "contract ProxyRegistry",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_salePrice",
          "type": "uint256"
        }
      ],
      "name": "royaltyInfo",
      "outputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "royaltyAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "secondarySaleFee",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "contractURI",
          "type": "string"
        }
      ],
      "name": "setContractURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_customCompositeTokenURIBase",
          "type": "string"
        }
      ],
      "name": "setCustomCompositeTokenURIBase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_customTokenURI",
          "type": "string"
        }
      ],
      "name": "setCustomTokenURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_defaultTokenURI",
          "type": "string"
        }
      ],
      "name": "setDefaultTokenURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc2665Handler",
          "type": "address"
        }
      ],
      "name": "setERC2665Handler",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_feeRecipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_feeValueBps",
          "type": "uint256"
        }
      ],
      "name": "setFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_globalCompositeTokenURIBase",
          "type": "string"
        }
      ],
      "name": "setGlobalCompositeTokenURIBase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_proxyRegistryAddress",
          "type": "address"
        }
      ],
      "name": "setProxyRegistryAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_transferListener",
          "type": "address"
        }
      ],
      "name": "setTransferListener",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_useComposite",
          "type": "bool"
        }
      ],
      "name": "setUseCompositeTokenURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "transferListener",
      "outputs": [
        {
          "internalType": "contract ITransferListener",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}
