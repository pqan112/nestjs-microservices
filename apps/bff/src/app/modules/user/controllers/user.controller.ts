import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { Body, Controller, HttpStatus, Inject, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ProcessId } from '@common/decorators/process-id.decorator'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { CreateUserRequestDto } from '@common/interfaces/gateway/user'
import { sendTcpRequest } from '@common/interfaces/tcp/common/send-tcp-request'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { ZodResponse } from 'nestjs-zod'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    @Inject(TCP_SERVICES.USER_ACCESS_SERVICE) private readonly userAccessClient: TcpClient
  ) {}

  @Post()
  @ZodResponse({ type: ResponseDto<string>, status: HttpStatus.CREATED })
  @ApiOperation({
    summary: 'Create a new user',
  })
  async create(@Body() body: CreateUserRequestDto, @ProcessId() processId: string) {
    return sendTcpRequest<string, CreateUserRequestDto>(
      this.userAccessClient,
      TCP_REQUEST_MESSAGE.USER.CREATE,
      processId,
      body
    )
  }
}
