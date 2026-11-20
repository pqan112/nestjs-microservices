import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { Controller, UseInterceptors } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { LoginRequestDto, LoginResponseDto } from '@common/interfaces/gateway/authorizer'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { AuthorizerService } from '../services/authorizer.service'
import { AuthorizeResponseDto } from '@common/interfaces/tcp/authorizer'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class AuthorizerController {
  constructor(private readonly authorizerService: AuthorizerService) {}

  @MessagePattern(TCP_REQUEST_MESSAGE.AUTHORIZER.LOGIN)
  async login(@RequestParams() params: LoginRequestDto) {
    const result = await this.authorizerService.login(params)
    return TCPResponseDto.success<LoginResponseDto>(result)
  }

  @MessagePattern(TCP_REQUEST_MESSAGE.AUTHORIZER.VERIFY_USER_TOKEN)
  async verifyUserToken(@RequestParams() token: string) {
    const result = await this.authorizerService.verifyUserToken(token)
    return TCPResponseDto.success<AuthorizeResponseDto>(result)
  }
}
