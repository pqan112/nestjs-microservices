import { Controller, Get, Inject } from '@nestjs/common'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { ZodResponse } from 'nestjs-zod'
import { AppService } from './app.service'
import { TCP_SERVICES } from '@common/configuration/tcp.config'
import { map } from 'rxjs'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(TCP_SERVICES.INVOICE_SERVICE) private readonly invoiceClient: TcpClient
  ) {}

  @Get()
  @ZodResponse({ type: ResponseDto<any> })
  getData(): ResponseDto<any> {
    return { message: 'OK', statusCode: 200, data: this.appService.getData() }
  }

  @Get('invoice')
  async getInvoice() {
    return this.invoiceClient
      .send<string, number>('get_invoice', {
        data: 1,
        processId: 'aaa',
      })
      .pipe(map((res) => ResponseDto.create({ data: res.data })))
  }
}
