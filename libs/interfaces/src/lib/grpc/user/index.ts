import { Observable } from 'rxjs'
import { UserTcpResponse } from '../../tcp/user'
import { Serialized } from '../../common/serialized.type'
import { GrpcResponse } from '../common/grpc-response.interface'

export interface UserById {
  userId: string
  processId: string
}

export type GrpcUserResponse = Serialized<UserTcpResponse>

export interface UserAccessService {
  getByUserId(data: UserById): Observable<GrpcResponse<GrpcUserResponse>>
}
