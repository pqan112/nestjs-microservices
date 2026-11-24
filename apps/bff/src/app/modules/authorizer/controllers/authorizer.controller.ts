import { THROTTLER_GROUP } from '@common/constants/enum/throttler-group.enum'
import { ThrottleGroup } from '@common/configuration/throttler.config'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { Public } from '@common/decorators/authorizer.decorator'
import { ProcessId } from '@common/decorators/process-id.decorator'
import { LoginRequestDto, LoginResponseDto } from '@common/interfaces/gateway/authorizer'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { sendTcpRequest } from '@common/interfaces/tcp/common/send-tcp-request'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { Body, Controller, HttpStatus, Inject, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZodResponse } from 'nestjs-zod'

@ApiTags('Authorizer')
@ThrottleGroup(THROTTLER_GROUP.AUTHORIZER)
@Controller('authorizer')
export class AuthorizerController {
  constructor(
    @Inject(TCP_SERVICES.AUTHORIZER_SERVICE) private readonly authorizerClient: TcpClient
  ) {}

  @Post('login')
  @ZodResponse({
    type: ResponseDto<LoginResponseDto>,
    status: HttpStatus.OK,
  })
  @ApiOperation({
    summary: 'Login with username and password',
  })
  @Public()
  async login(@Body() body: LoginRequestDto, @ProcessId() processId: string) {
    return sendTcpRequest<LoginResponseDto, LoginRequestDto>(
      this.authorizerClient,
      TCP_REQUEST_MESSAGE.AUTHORIZER.LOGIN,
      processId,
      body
    )
  }
}
