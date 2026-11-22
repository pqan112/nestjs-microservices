import { Controller, UseInterceptors } from '@nestjs/common'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { UserService } from '../services/user.service'
import { MessagePattern } from '@nestjs/microservices'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { CreateUserRequestDto } from '@common/interfaces/gateway/user'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { ProcessId } from '@common/decorators/process-id.decorator'
import { UserTcpResponse } from '@common/interfaces/tcp/user'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(TCP_REQUEST_MESSAGE.USER.CREATE)
  async create(@RequestParams() data: CreateUserRequestDto, @ProcessId() processId: string) {
    await this.userService.create(data, processId)
    return TCPResponseDto.success<string>(HTTP_MESSAGE.CREATED)
  }

  @MessagePattern(TCP_REQUEST_MESSAGE.USER.GET_BY_USER_ID)
  async getByUserId(@RequestParams() userId: string) {
    const user = await this.userService.getUserByUserId(userId)
    return TCPResponseDto.success<UserTcpResponse>(user)
  }
}
