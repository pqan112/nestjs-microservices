import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { ProcessId } from '@common/decorators/process-id.decorator'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { CreateUserRequestDto } from '@common/interfaces/gateway/user'
import { TcpSuccess } from '@common/interfaces/tcp/common/tcp-response.interface'
import { Controller, UseInterceptors } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { UserService } from '../services/user.service'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(TCP_REQUEST_MESSAGE.USER.CREATE)
  async create(@RequestParams() data: CreateUserRequestDto, @ProcessId() processId: string) {
    await this.userService.create(data, processId)
    return TcpSuccess(HTTP_MESSAGE.CREATED)
  }

  @MessagePattern(TCP_REQUEST_MESSAGE.USER.GET_BY_USER_ID)
  async getByUserId(@RequestParams() userId: string) {
    const user = await this.userService.getUserByUserId(userId)
    return TcpSuccess(user)
  }
}
