import { WithId } from 'mongodb'
import { Observable } from 'rxjs'
import { Role } from '@common/schemas/role.schema'
import { User } from '@common/schemas/user.schema'
import { GrpcResponse } from '../common/grpc-response.interface'

export interface UserById {
  userId: string
  processId: string
}

export type GrpcUserResponse = WithId<Omit<User, 'roles'> & { roles: WithId<Role>[] }>

export interface UserAccessService {
  getByUserId(data: UserById): Observable<GrpcResponse<GrpcUserResponse>>
}
