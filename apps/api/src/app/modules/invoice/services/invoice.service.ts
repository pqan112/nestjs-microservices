import { Injectable } from '@nestjs/common'
import { InvoiceRepo } from '../repos/invoice.repo'
import { CreateInvoiceTcpRequest } from '@common/interfaces/tcp/invoice'
import { invoiceRequestMapping } from '../mappers'

@Injectable()
export class InvoiceService {
  constructor(private readonly invoiceRepo: InvoiceRepo) {}

  create(params: CreateInvoiceTcpRequest) {
    const data = invoiceRequestMapping(params)
    return this.invoiceRepo.create(data)
  }
}
