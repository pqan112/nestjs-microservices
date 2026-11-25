import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { ERROR_CODE } from '@common/constants/enum/error-code.enum'
import { InvoiceRepo } from '../repos/invoice.repo'
import { SendInvoiceTcpRequest, UpdateInvoiceTcpRequest } from '@common/interfaces/tcp/invoice'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { INVOICE_STATUS } from '@common/constants/enum/invoice.enum'
import { Invoice } from '@common/schemas/invoice.schema'
import { CreateInvoiceRequestDto } from '@common/interfaces/gateway/invoice'
import { toResponse } from '@common/schemas/mongo.mapper'
import { invoiceRequestMapping } from '../mappers'

@Injectable()
export class InvoiceService {
  constructor(
    private readonly invoiceRepo: InvoiceRepo,
    @Inject(TCP_SERVICES.PDF_GENERATOR_SERVICE) private readonly pdfGeneratorClient: TcpClient
  ) {}

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
      throw new NotFoundException(ERROR_CODE.INVOICE_NOT_FOUND)
    }
    return toResponse(invoice)
  }

  async send({ invoiceId, userId }: SendInvoiceTcpRequest, processId: string) {
    const invoice = await this.invoiceRepo.findById(invoiceId)
    if (!invoice) {
      throw new NotFoundException(ERROR_CODE.INVOICE_NOT_FOUND)
    }
    if (invoice.status !== INVOICE_STATUS.CREATED) {
      throw new BadRequestException(ERROR_CODE.INVOICE_CAN_NOT_BE_SENT)
    }

    const pdfBase64 = await this.generateInvoicePdf(invoice, processId)
    // TODO: upload file to cloudinary

    await this.invoiceRepo.update(invoiceId, {
      status: INVOICE_STATUS.SENT,
      supervisorId: userId ?? undefined,
    })

    return pdfBase64
  }

  private async generateInvoicePdf(invoice: Invoice, processId: string) {
    const { data } = await firstValueFrom(
      this.pdfGeneratorClient.send<string, Invoice>(
        TCP_REQUEST_MESSAGE.PDF_GENERATOR.CREATE_INVOICE_PDF,
        { data: invoice, processId }
      )
    )
    return data
  }
}
