import { Controller, Get, Inject } from '@nestjs/common'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { ZodResponse } from 'nestjs-zod'
import { AppService } from './app.service'
import { TCP_SERVICES } from '@common/configuration/tcp.config'
import { map } from 'rxjs'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { ProcessId } from '@common/decorators/processId.decorator'
import { INVOICE_PATTERNS } from '@common/constants/tcp-pattern.constant'

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
  async getInvoice(@ProcessId() processId: string) {
    return this.invoiceClient
      .send<string, { invoiceId: number }>(INVOICE_PATTERNS.GET_INVOICE, {
        data: { invoiceId: 1 },
        processId,
      })
      .pipe(map((res) => ResponseDto.create({ data: res.data })))
  }
}
