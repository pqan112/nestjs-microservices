import { Inject, Injectable } from '@nestjs/common'
import { Collection, Db, ObjectId } from 'mongodb'
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

  async create(data: Omit<CreateInvoice, 'status'>): Promise<Invoice> {
    const invoice = newDocument({ ...data, status: INVOICE_STATUS.CREATED })
    await this.invoices.insertOne(invoice)
    return invoice
  }

  findById(id: string): Promise<Invoice | null> {
    return this.invoices.findOne({ _id: new ObjectId(id) })
  }

  update(_id: ObjectId, dto: UpdateInvoice): Promise<Invoice | null> {
    return this.invoices.findOneAndUpdate(
      { _id },
      { $set: touch(dto) },
      { returnDocument: 'after' }
    )
  }
}
