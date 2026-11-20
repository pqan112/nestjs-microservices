import { Controller } from '@nestjs/common'
import { KeycloakHttpService } from '../services/keycloak-http.service'
import { MessagePattern } from '@nestjs/microservices'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { CreateKeycloakUserTcpReq } from '@common/interfaces/tcp/authorizer'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { UseInterceptors } from '@nestjs/common'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class KeycloakController {
  constructor(private readonly keycloakHttpService: KeycloakHttpService) {}

  @MessagePattern(TCP_REQUEST_MESSAGE.KEYCLOAK.CREATE_USER)
  async createUser(
    @RequestParams() data: CreateKeycloakUserTcpReq
  ): Promise<TCPResponseDto<string>> {
    const result = await this.keycloakHttpService.createUser(data)
    return TCPResponseDto.success<string>(result)
  }
}
