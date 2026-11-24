import { Controller } from '@nestjs/common'
import { UserService } from '../services/user.service'
import { GrpcMethod } from '@nestjs/microservices'
import { GrpcUserResponse, UserById } from '@common/interfaces/grpc/user-access'
import { GrpcResponse, GrpcSuccess } from '@common/interfaces/grpc/common/grpc-response.interface'

@Controller()
export class UserGrpcController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserAccessService', 'getByUserId')
  async getByUserId(payload: UserById): Promise<GrpcResponse<GrpcUserResponse>> {
    const user = await this.userService.getUserByUserId(payload.userId)

    return GrpcSuccess<GrpcUserResponse>(user)
  }
}
