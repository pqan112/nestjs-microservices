import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { AppService } from './app.service'
import { MessagePattern } from '@nestjs/microservices'
import { TcpLoggingInterceptor } from '@common/interceptors/tcpLogging.interceptor'
import { TCPRequestDto } from '@common/interfaces/tcp/common/request.dto'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @MessagePattern('get_invoice')
  getInvoice(data: TCPRequestDto<number>): TCPResponseDto<string> {
    return TCPResponseDto.success<string>(`Invoice ${data.data}`)
  }
}
