---
title: Native Ethereum indexing workshop
tags: EVM, Subsquid, Indexing, Ethereum, Workshop
description: Indexing Ethereum blockchain with Subsquid
slideOptions:
  center: false
  transition: fade
  spotlight:
    enabled: false
---

<style>
    .left {
        text-align: left;
    }
    .smol {
        font-size: 24px;
    }
    .reveal pre {
        height: 100%;
        width: 100%;
    }
</style>

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/cover_bg.png" -->

<!-- ![](https://i.imgur.com/Z4Jt5vh.png) -->
# Native EVM indexing

## Access Ethereum blockchain data with Subsquid

Slides available here
https://hackmd.io/@RaekwonIII/native-ethereum-workshop

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Greetings 👋

### Massimo Luraschi

### Developer Advocate @ subsquid.io

* ![](https://i.imgur.com/wqhrc3N.png =24x24) [@RaekwonIII](https://twitter.com/RaekwonIII) 
* ![](https://i.imgur.com/kH2GXYx.png =24x24) RaekwonIII#3962 
* ![](https://i.imgur.com/92AwE1H.png =24x24) [@RaekwonTheChefIII](https://t.me/RaekwonTheChefIII) 
* ![](https://i.imgur.com/MGAfGvC.png =24x24) [RaekwonIII](https://github.com/RaekwonIII) 

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->
  
## Web2 data solutions

![](https://i.imgur.com/hUcDZYQ.png)

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->
  
## Web2 data solutions

* Serve millions of users 
* Millisecond latencies
* Real-time analysis => insights, informed decisions
* Scale on demand

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->
  
## Blockchain data problems

* High latency
* Scalability
* Queries
* Type-safe data extraction and transformation
* Maintain decentralized architecture

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Modular architecture

![](https://i.imgur.com/94TnG3C.png)

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Monolith vs modular

## Monolith

* Multiple uses, same ingestion
* Potential replication
* Wasted effort, resources
* Rigid structure, hard to evolve

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Monolith vs modular

## Modular

* Shared extraction services: Archives
* Lower storage, computing power requirements
* Cost effective
* Better performance

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Archives

![](https://i.imgur.com/iVb8yAJ.png)

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Archives

![](https://i.imgur.com/0l4vSFQ.png)

### ⬇️

![](https://i.imgur.com/Y5UCapt.png)

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Archives

* One less thing to care about
* Better storage, better performance
* Filtering, batching
* Reduce network overhead
* Modularity ➡️ future improvements

Note:

* API updates => wait for re-sync
  * Acts like a "blockchain cache"
* Can be scaled, does not depend on the DApp
* Bonus: can use Archives and Processors like LEGOs

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# squids

![](https://i.imgur.com/hiXjF8C.png)

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# squids

![](https://i.imgur.com/v8UCuVb.png)

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# squids

* Create your own data processing (schema and mapping)
* Use SDK **and** external libraries
* Auto-generated code
    * save time, effort
    * REDUCE BUGS

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Built for devs

## Easy setup, local development 💻

Note:

It's much easier to test, break things, start, stop the server

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Built for devs

## Fast sync times 🔥

Note:

Fast sync times, because the raw indexing is done by Archives
Build and deploy production-ready APIs within *hours*

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Built for devs

## Serverless deployment ☁️

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Built for devs

## Type-safety of TypeScript 🔐

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Codegen

## From schema

```graphql=
type Owner @entity {
  id: ID!
  ownedTokens: [Token!]! @derivedFrom(field: "owner")
  balance: BigInt
}
```

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Codegen

## To Models

```typescript=
@Entity_()
export class Owner {
  constructor(props?: Partial<Owner>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @OneToMany_(() => Token, e => e.owner)
  ownedTokens!: Token[]

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  balance!: bigint | undefined | null
}

```

Note:

Easier to define entities as a schema, code is built automatically

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# EVM Typegen

## Type-safe classes from ABI deserialization

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

## ABI deserialization

### From JSON...

```json=
[
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
```

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

## ABI deserialization

### ...to TypeScript

```typescript=
export interface Transfer0Event {
  from: string;
  to: string;
  tokenId: ethers.BigNumber;
}

export const events = {
  // ...
  "Transfer(address,address,uint256)":  {
    topic: abi.getEventTopic("Transfer(address,address,uint256)"),
    decode(data: EvmEvent): Transfer0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Transfer(address,address,uint256)"),
        data.data || "",
        data.topics
      );
      return  {
        from: result[0],
        to: result[1],
        tokenId: result[2],
      }
    }
  },
}
```

Note:

* No manual JSON parsing
* Pass data through interfaces

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Resources

* [Subsquid Docs](https://docs.subsquid.io)
* [Template project](https://github.com/subsquid/squid-evm-template)
* [Aquarium](https://app.subsquid.io/aquarium)
* [Stackexchange](https://substrate.stackexchange.com/) (subsquid tag):
* Community: [Telegram](https://t.me/HydraDevs) group, [Discord](https://discord.gg/dxR4wNgdjV) server 

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Let’s get coding…🦑

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

## Goal: [Exosama](https://exosama.com/) tracker

1. Setup<!-- .element: class="fragment" -->
2. Review the schema<!-- .element: class="fragment" -->
3. Generate models<!-- .element: class="fragment" -->
4. Generate Interfaces<!-- .element: class="fragment" -->
5. Implement logic in Processor<!-- .element: class="fragment" -->
6. Launch database container<!-- .element: class="fragment" -->
7. Create and apply database migration<!-- .element: class="fragment" -->
8. Launch processor and GraphQL server<!-- .element: class="fragment" -->

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Setup

* Requisites: [Node.js](https://nodejs.org/en/download/) (16 or later), [Docker](https://docs.docker.com/get-docker/)

* GitHub [template](https://github.com/subsquid/squid-ethereum-template), *Use this template*, then

```bash
git clone git@github.com:<account>/squid-ethereum-template.git
```

* Install dependencies from project's root folder

```bash
cd squid-ethereum-template && npm i
``` 

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Codegen (schema)

Define entities we want to track in `schema.graphql` file in the project root folder

* Token (and token transfers)
* Ownership of tokens
* Contract and their minted tokens

```graphql=
type Token @entity {
  id: ID!
  owner: Owner
  uri: String
  transfers: [Transfer!]! @derivedFrom(field: "token")
  contract: Contract
}
 
type Owner @entity {
  id: ID!
  ownedTokens: [Token!] @derivedFrom(field: "owner")
  balance: BigInt! @index
}
 
type Contract @entity {
  id: ID!
  name: String! @index
  symbol: String! @index
  # contract URI updated once e.g. a day
  contractURI: String
  address: String
  # timestamp when the contract URI was updated last
  contractURIUpdated: BigInt @index
  totalSupply: BigInt!
  mintedTokens: [Token!]! @derivedFrom(field: "contract")
}
 
type Transfer @entity {
  id: ID!
  token: Token!
  from: Owner
  to: Owner
  timestamp: BigInt! @index
  block: Int! @index
  transactionHash: String! @index
}

```

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Codegen (proj structure)

* From project's root folder, launch 
```bash
make codegen
```
* New files will be created ![](https://i.imgur.com/YXgGNHW.png =x450)

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Codegen (classes)

### Let's take the `Owner` entity as an example

```typescript=
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./token.model"

@Entity_()
export class Owner {
  constructor(props?: Partial<Owner>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @OneToMany_(() => Token, e => e.owner)
  ownedTokens!: Token[]

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  balance!: bigint
}

```

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# EVM Typegen

* Need Exosama smart contract's ABI to interpret its logs
* Copy it from [here](https://raw.githubusercontent.com/subsquid/exosama-marketplace-squid/master/src/abi/ExosamaCollection.json?token=GHSAT0AAAAAABYGBV26BQ6KEQPNQCMB43F6Y2RFAJQ)
* Create a `src/abi` folder to contain all ABIs
* Paste it into a file named `exo.json` in `src/abi`
* From project root folder, launch:

```bash
npx squid-evm-typegen --abi src/abi/exo.json --output src/abi/exo.ts
```

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Contract helper

This is a very simplified version, that hard-codes some of the data.

```typescript=
import { Store } from "@subsquid/typeorm-store";
import { Contract } from "./model";

export const contractAddress = "0xac5c7493036de60e63eb81c5e9a440b42f47ebf5";

let contractEntity: Contract | undefined;

export async function getOrCreateContractEntity(store: Store): Promise<Contract> {
  if (contractEntity == null) {
    contractEntity = await store.get(Contract, contractAddress);
    if (contractEntity == null) {
      contractEntity = new Contract({
        id: contractAddress,
        name: "Exosama",
        symbol: "EXO",
        totalSupply: 10000n,
      });
      await store.insert(contractEntity);
    }
  }
  return contractEntity;
}

```

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Processor logic

Processor logic needs to be updated, we maintain the handling of Substrate Events, but add EVM logs handling. Let's change the file like so:

```typescript=
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import { EvmBatchProcessor, BlockHandlerContext, LogHandlerContext } from "@subsquid/evm-processor";
import { In } from "typeorm";
import { BigNumber } from "ethers";
import {
  CHAIN_NODE,
  contractAddress,
  getOrCreateContractEntity,
} from "./contract";
import { Owner, Token, Transfer } from "./model";
import * as exo from "./abi/exo";

const database = new TypeormDatabase();
const processor = new EvmBatchProcessor()
  .setBlockRange({ from: 15584000 })
  .setDataSource({
    chain: process.env.ETHEREUM_MAINNET_WSS,
    archive: 'https://eth-test.archive.subsquid.io',
  })
  .addLog(contractAddress, {
    filter: [[exo.events["Transfer(address,address,uint256)"].topic]],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
      transaction: {
        hash: true,
      },
    },
  });

processor.run(database, async (ctx) => {
  const transfersData: TransferData[] = [];

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.kind === "evmLog") {
        if (item.address === contractAddress) {
          const transfer = handleTransfer({
            ...ctx,
            block: block.header,
            ...item,
          });

          transfersData.push(transfer);
        }
      }
    }
  }

  await saveTransfers({
    ...ctx,
    block: ctx.blocks[ctx.blocks.length - 1].header,
  }, transfersData);
});

type TransferData = {
  id: string;
  from: string;
  to: string;
  tokenId: bigint;
  timestamp: bigint;
  block: number;
  transactionHash: string;
};

function handleTransfer(
  ctx: LogHandlerContext<
    Store,
    { evmLog: { topics: true; data: true }; transaction: { hash: true } }
  >
): TransferData {
  const { evmLog, transaction, block } = ctx;
  const addr = evmLog.address.toLowerCase()

  const { from, to, tokenId } = exo.events[
    "Transfer(address,address,uint256)"
  ].decode(evmLog);

  const transfer: TransferData = {
    id: `${transaction.hash}-${addr}-${tokenId.toBigInt()}-${evmLog.index}`,
    tokenId: tokenId.toBigInt(),
    from,
    to,
    timestamp: BigInt(block.timestamp),
    block: block.height,
    transactionHash: transaction.hash,
  };

  return transfer;
}

async function saveTransfers(ctx: BlockHandlerContext<Store>, transfersData: TransferData[]) {
  const tokensIds: Set<string> = new Set();
  const ownersIds: Set<string> = new Set();

  for (const transferData of transfersData) {
    tokensIds.add(transferData.tokenId.toString());
    ownersIds.add(transferData.from);
    ownersIds.add(transferData.to);
  }

  const transfers: Set<Transfer> = new Set();

  const tokens: Map<string, Token> = new Map(
    (await ctx.store.findBy(Token, { id: In([...tokensIds]) })).map((token) => [
      token.id,
      token,
    ])
  );

  const owners: Map<string, Owner> = new Map(
    (await ctx.store.findBy(Owner, { id: In([...ownersIds]) })).map((owner) => [
      owner.id,
      owner,
    ])
  );

  for (const transferData of transfersData) {
    const contract = new exo.Contract(
      ctx,
      { height: transferData.block },
      contractAddress
    );

    let from = owners.get(transferData.from);
    if (from == null) {
      from = new Owner({ id: transferData.from, balance: 0n });
      owners.set(from.id, from);
    }

    let to = owners.get(transferData.to);
    if (to == null) {
      to = new Owner({ id: transferData.to, balance: 0n });
      owners.set(to.id, to);
    }

    const tokenIdString = transferData.tokenId.toString();

    let token = tokens.get(tokenIdString);

    let tokenURI
    try {
      tokenURI = await contract.tokenURI(BigNumber.from(transferData.tokenId)) 
    } catch (error) {
      ctx.log.warn(`[API] Error during fetch tokenURI of ${tokenIdString}`);
      if (error instanceof Error)
        ctx.log.warn(`${error.message}`);
    }
    if (token == null) {
      token = new Token({
        id: tokenIdString,
        uri: tokenURI,
        contract: await getOrCreateContractEntity(ctx.store),
      });
      tokens.set(token.id, token);
    }
    token.owner = to;

    const { id, block, transactionHash, timestamp } = transferData;

    const transfer = new Transfer({
      id,
      block,
      timestamp,
      transactionHash,
      from,
      to,
      token,
    });

    transfers.add(transfer);
  }

  await ctx.store.save([...owners.values()]);
  await ctx.store.save([...tokens.values()]);
  await ctx.store.save([...transfers]);
}

```

Note:

Remember to comment out `tokenUri` fetch, as an example

----

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Ethereum Mainnet RPC endpoint

We need set the `ETHEREUM_MAINNET_WSS` env variable value to a valid WSS endpoint for an Ethereum RPC node. You can use [EthereumNodes](https://ethereumnodes.com/) to find one.

Note:

`wss://mainnet.infura.io/ws/v3/2a1be98f319e4b059b85f853a140b315`

Remember to comment out `tokenUri` fetch, as an example

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Database

* Squid APIs need a database to store processed data
* Templates have `docker-compose.yml` file to launch a container
* From project's root folder, launch 
```bash
make up
```

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Create and apply database migration

* Build code

```bash
npm run build
```

* Clean up existing migrations

```bash
rm db/migrations/*.js
```

* Create and apply new migration

```bash
make migration
```

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

<!-- .slide: class="smol" -->
<!-- .slide: class="left" -->

# Launch the project

The project consists of a Processor (which we just implemented) and a GraphQL server.

* Launch the Processor (this will lock the console window)

```bash=
make process
```

* Launch the GraphQL server (in another console window)

```bash=
make serve
```

* Open the browser at http://localhost:4350/graphql

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

## Welcome to Subsquid, Ethereum! 🎉

![](https://media.giphy.com/media/KgZtmd3iI1HoVIBnFf/giphy.gif)

This project is available in our [Aquarium](https://app.subsquid.io/aquarium/ethereum-workshop)

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

## What's next?

#### Pick a ~~card~~ contract, any ~~card~~ contract! 🃏🪄

Subsquid SDK allows extreme flexibility. We ingest blocks, extract data, you decide how to process and index it.

---

<!-- .slide: data-background="https://github.com/RaekwonIII/ethereum-workshop/raw/main/assets/base_bg.png" -->

# Thank you 🦑


Follow the project on GitHub
https://github.com/subsquid/squid

![](https://media.giphy.com/media/SVz8HyYrXdJyE/giphy.gif)

Give us a ⭐, more Alpha coming soon™️