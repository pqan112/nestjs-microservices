import { Controller, Get } from '@nestjs/common'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { ZodResponse } from 'nestjs-zod'
import { AppService } from './app.service'

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ZodResponse({ type: ResponseDto<any> })
  getData(): ResponseDto<any> {
    return { message: 'OK', statusCode: 200, data: this.appService.getData() }
  }
}
