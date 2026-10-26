import { Inject, Injectable } from '@nestjs/common'
import { Collection, Db, ObjectId, WithId } from 'mongodb'
import { MONGO_DB } from '@common/configuration/mongo.config'
import { COLLECTIONS } from '@common/constants/common.constant'
import { newDocument, touch } from '@common/schemas/base.schema'
import { CreateInvoice, Invoice, UpdateInvoice } from '@common/schemas/invoice.schema'
import { INVOICE_STATUS } from '@common/constants/enum/invoice.enum'

@Injectable()
export class InvoiceRepo {
  private readonly invoices: Collection<Invoice>

  constructor(@Inject(MONGO_DB) db: Db) {
    this.invoices = db.collection<Invoice>(COLLECTIONS.INVOICE)
  }

  async create(data: Omit<CreateInvoice, 'status'>): Promise<WithId<Invoice>> {
    const invoice = newDocument({ ...data, status: INVOICE_STATUS.CREATED })
    const { insertedId } = await this.invoices.insertOne(invoice)
    return { _id: insertedId, ...invoice }
  }

  findAll(): Promise<WithId<Invoice>[]> {
    return this.invoices.find().toArray()
  }

  findById(id: string): Promise<WithId<Invoice> | null> {
    return this.invoices.findOne({ _id: new ObjectId(id) })
  }

  update(id: string, dto: UpdateInvoice): Promise<WithId<Invoice> | null> {
    return this.invoices.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: touch(dto) },
      { returnDocument: 'after' }
    )
  }
}
