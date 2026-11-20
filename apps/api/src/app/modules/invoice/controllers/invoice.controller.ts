import { Controller, UseInterceptors } from '@nestjs/common'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
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
  ): Promise<TCPResponseDto<InvoiceResponseDto>> {
    const result = await this.invoiceService.create(params)
    return TCPResponseDto.success<InvoiceResponseDto>(result)
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.GET_LIST)
  async findAll(): Promise<TCPResponseDto<InvoiceResponseDto[]>> {
    const result = await this.invoiceService.findAll()
    return TCPResponseDto.success<InvoiceResponseDto[]>(result)
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(TCP_REQUEST_MESSAGE.INVOICE.UPDATE)
  async update(
    @RequestParams() params: UpdateInvoiceTcpRequest
  ): Promise<TCPResponseDto<InvoiceResponseDto>> {
    const result = await this.invoiceService.update(params)
    return TCPResponseDto.success<InvoiceResponseDto>(result)
  }
}
