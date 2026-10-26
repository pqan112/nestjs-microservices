import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpLoggingInterceptor } from '@common/interceptors/tcpLogging.interceptor'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { MessagePattern } from '@nestjs/microservices'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import type {
  CreateInvoiceTcpRequest,
  InvoiceTcpResponse,
  UpdateInvoiceTcpRequest,
} from '@common/interfaces/tcp/invoice'
import { InvoiceService } from '../services/invoice.service'

@Controller()
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  test() {
    return { message: 'test' }
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.CREATE)
  async create(
    @RequestParams() params: CreateInvoiceTcpRequest
  ): Promise<TCPResponseDto<InvoiceTcpResponse>> {
    const result = await this.invoiceService.create(params)
    return TCPResponseDto.success<InvoiceTcpResponse>(result)
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.GET_LIST)
  async findAll(): Promise<TCPResponseDto<InvoiceTcpResponse[]>> {
    const result = await this.invoiceService.findAll()
    return TCPResponseDto.success<InvoiceTcpResponse[]>(result)
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.UPDATE)
  async update(
    @RequestParams() params: UpdateInvoiceTcpRequest
  ): Promise<TCPResponseDto<InvoiceTcpResponse>> {
    const result = await this.invoiceService.update(params)
    return TCPResponseDto.success<InvoiceTcpResponse>(result)
  }
}
