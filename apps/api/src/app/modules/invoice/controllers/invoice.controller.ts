import { Controller, UseInterceptors } from '@nestjs/common'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { TcpResponse, TcpSuccess } from '@common/interfaces/tcp/common/tcp-response.interface'
import { MessagePattern } from '@nestjs/microservices'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import type {
  CreateInvoiceRequestDto,
  InvoiceResponseDto,
} from '@common/interfaces/gateway/invoice'
import type { UpdateInvoiceTcpRequest } from '@common/interfaces/tcp/invoice'
import { InvoiceService } from '../services/invoice.service'

@Controller()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.CREATE)
  async create(
    @RequestParams() params: CreateInvoiceRequestDto
  ): Promise<TcpResponse<InvoiceResponseDto>> {
    const result = await this.invoiceService.create(params)
    return TcpSuccess(result)
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.GET_LIST)
  async findAll(): Promise<TcpResponse<InvoiceResponseDto[]>> {
    const result = await this.invoiceService.findAll()
    return TcpSuccess(result)
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.UPDATE)
  async update(
    @RequestParams() params: UpdateInvoiceTcpRequest
  ): Promise<TcpResponse<InvoiceResponseDto>> {
    const result = await this.invoiceService.update(params)
    return TcpSuccess(result)
  }
}
