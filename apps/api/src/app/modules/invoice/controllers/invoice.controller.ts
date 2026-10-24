import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { ProcessId } from '@common/decorators/processId.decorator'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpLoggingInterceptor } from '@common/interceptors/tcpLogging.interceptor'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { MessagePattern } from '@nestjs/microservices'
import { INVOICE_PATTERNS } from '@common/constants/tcp-pattern.constant'

@Controller('invoice')
export class InvoiceController {
  constructor() {}

  @Get()
  test() {
    return { message: 'test' }
  }

  @UseInterceptors(TcpLoggingInterceptor)
  @MessagePattern(INVOICE_PATTERNS.GET_INVOICE)
  getInvoice(
    @ProcessId() processId: string,
    @RequestParams('invoiceId') invoiceId: number
  ): TCPResponseDto<string> {
    return TCPResponseDto.success<string>(`Invoice ${invoiceId} from ${processId}`)
  }
}
