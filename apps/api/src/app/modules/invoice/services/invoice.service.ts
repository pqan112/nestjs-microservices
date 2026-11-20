import { Injectable, NotFoundException } from '@nestjs/common'
import { InvoiceRepo } from '../repos/invoice.repo'
import { UpdateInvoiceTcpRequest } from '@common/interfaces/tcp/invoice'
import { CreateInvoiceRequestDto } from '@common/interfaces/gateway/invoice'
import { toResponse } from '@common/schemas/mongo.mapper'
import { invoiceRequestMapping } from '../mappers'

@Injectable()
export class InvoiceService {
  constructor(private readonly invoiceRepo: InvoiceRepo) {}

  async create(params: CreateInvoiceRequestDto) {
    const data = invoiceRequestMapping(params)
    return toResponse(await this.invoiceRepo.create(data))
  }

  async findAll() {
    const invoices = await this.invoiceRepo.findAll()
    return invoices.map(toResponse)
  }

  async update({ id, ...dto }: UpdateInvoiceTcpRequest) {
    const invoice = await this.invoiceRepo.update(id, dto)
    if (!invoice) {
      throw new NotFoundException(`Invoice ${id} not found`)
    }
    return toResponse(invoice)
  }
}
