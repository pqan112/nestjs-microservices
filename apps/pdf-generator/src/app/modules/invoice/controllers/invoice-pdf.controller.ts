import { Controller, UseInterceptors } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpResponse, TcpSuccess } from '@common/interfaces/tcp/common/tcp-response.interface'
import type { Invoice } from '@common/schemas/invoice.schema'
import { InvoicePdfService } from '../services/invoice-pdf.service'

@Controller()
export class InvoicePdfController {
  constructor(private readonly invoicePdfService: InvoicePdfService) {}

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.PDF_GENERATOR.CREATE_INVOICE_PDF)
  async generateInvoicePdf(@RequestParams() invoice: Invoice): Promise<TcpResponse<string>> {
    const pdf = await this.invoicePdfService.generateInvoicePdf(invoice)
    return TcpSuccess(Buffer.from(pdf).toString('base64'))
  }
}
