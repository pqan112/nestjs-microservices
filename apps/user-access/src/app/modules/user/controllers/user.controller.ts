import { Controller, UseInterceptors } from '@nestjs/common'
import { TcpLoggingInterceptor } from '@common/interceptors/tcpLogging.interceptor'
import { UserService } from '../services/user.service'
import { MessagePattern } from '@nestjs/microservices'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { CreateUserTcpRequest } from '@common/interfaces/tcp/user'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(TCP_REQUEST_MESSAGE.USER.CREATE)
  async create(@RequestParams() data: CreateUserTcpRequest) {
    await this.userService.create(data)
    return TCPResponseDto.success<string>(HTTP_MESSAGE.CREATED)
  }
}
