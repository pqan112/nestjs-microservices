import { Controller, Get, Logger, UseInterceptors } from '@nestjs/common'
import { AppService } from './app.service'
import { MessagePattern } from '@nestjs/microservices'
import { TcpLoggingInterceptor } from '@common/interceptors/tcpLogging.interceptor'
import { TCPRequestDto } from '@common/interfaces/tcp/common/request.dto'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { ProcessId } from '@common/decorators/processId.decorator'
import { RequestParams } from '@common/decorators/request-param.decorator'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @MessagePattern('get_invoice')
  getInvoice(
    @ProcessId() processId: string,
    @RequestParams('invoiceId') invoiceId: number
  ): TCPResponseDto<string> {
    Logger.debug('processid', processId)

    return TCPResponseDto.success<string>(`Invoice ${invoiceId} from ${processId}`)
  }
}
