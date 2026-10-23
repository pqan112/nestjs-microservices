import { Controller, Get, Inject } from '@nestjs/common'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { ZodResponse } from 'nestjs-zod'
import { AppService } from './app.service'
import { ClientProxy } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('TCP_INVOICE_SERVICE') private readonly invoiceClient: ClientProxy
  ) {}

  @Get()
  @ZodResponse({ type: ResponseDto<any> })
  getData(): ResponseDto<any> {
    return { message: 'OK', statusCode: 200, data: this.appService.getData() }
  }

  @Get('invoice')
  async getInvoice() {
    const result = await firstValueFrom(this.invoiceClient.send<string, number>('get_invoice', 1))

    return ResponseDto.create({
      data: result,
    })
  }
}
