import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Owner} from "./owner.model"

@Entity_()
export class HistoricalBalance {
  constructor(props?: Partial<HistoricalBalance>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Owner, {nullable: false})
  account!: Owner

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  balance!: bigint

  @Column_("timestamp with time zone", {nullable: false})
  date!: Date
}
