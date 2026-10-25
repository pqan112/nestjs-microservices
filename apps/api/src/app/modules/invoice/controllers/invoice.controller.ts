import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { ProcessId } from '@common/decorators/processId.decorator'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpLoggingInterceptor } from '@common/interceptors/tcpLogging.interceptor'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { MessagePattern } from '@nestjs/microservices'
import { INVOICE_PATTERNS } from '@common/constants/tcp-pattern.constant'
import type { CreateInvoiceTcpRequest, InvoiceTcpResponse } from '@common/interfaces/tcp/invoice'
import { InvoiceService } from '../services/invoice.service'

@Controller()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  test() {
    return { message: 'test' }
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(INVOICE_PATTERNS.CREATE)
  async getInvoice(
    @RequestParams() params: CreateInvoiceTcpRequest,
    @ProcessId() processId: string
  ): Promise<TCPResponseDto<InvoiceTcpResponse>> {
    const result = await this.invoiceService.create(params)
    return TCPResponseDto.success<InvoiceTcpResponse>(result)
  }
}
