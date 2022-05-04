import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v1201 from './v1201'

export class BalancesTransferEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Transfer')
  }

  /**
   *  Transfer succeeded. \[from, to, value\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   *  Transfer succeeded. \[from, to, value\]
   */
  get asV49(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === '23222c59f2992c12387568241620899d2d399ab9027595daca8255637f62ece3'
  }

  /**
   * Transfer succeeded.
   */
  get asV1201(): {from: v1201.AccountId20, to: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {from: v1201.AccountId20, to: v1201.AccountId20, amount: bigint} {
    deprecateLatest()
    return this.asV1201
  }
}
