import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { ProcessId } from '@common/decorators/process-id.decorator'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { LoginRequestDto } from '@common/interfaces/gateway/authorizer'
import { TcpSuccess } from '@common/interfaces/tcp/common/tcp-response.interface'
import { Controller, UseInterceptors } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { AuthorizerService } from '../services/authorizer.service'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class AuthorizerController {
  constructor(private readonly authorizerService: AuthorizerService) {}

  @MessagePattern(TCP_REQUEST_MESSAGE.AUTHORIZER.LOGIN)
  async login(@RequestParams() params: LoginRequestDto) {
    const result = await this.authorizerService.login(params)
    return TcpSuccess(result)
  }

  @MessagePattern(TCP_REQUEST_MESSAGE.AUTHORIZER.VERIFY_USER_TOKEN)
  async verifyUserToken(@RequestParams() token: string, @ProcessId() processId: string) {
    const result = await this.authorizerService.verifyUserToken(token, processId)
    return TcpSuccess(result)
  }
}
