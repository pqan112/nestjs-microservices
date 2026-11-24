import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'
import { AuthorizerService } from '../services/authorizer.service'
import {
  VerifyUserTokenRequest,
  VerifyUserTokenResponse,
} from '@common/interfaces/grpc/authorizer/authorizer.interface'
import { GrpcSuccess } from '@common/interfaces/grpc/common/grpc-response.interface'

@Controller()
export class AuthorizerGrpcController {
  constructor(private readonly authorizerService: AuthorizerService) {}

  @GrpcMethod('AuthorizerService', 'verifyUserToken')
  async verifyUserToken(params: VerifyUserTokenRequest): Promise<VerifyUserTokenResponse> {
    const result = await this.authorizerService.verifyUserToken(params.token, params.processId)
    return GrpcSuccess(result)
  }
}
