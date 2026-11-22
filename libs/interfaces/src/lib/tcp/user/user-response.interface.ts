import { WithId } from 'mongodb'
import { Role } from '@common/schemas/role.schema'
import { User } from '@common/schemas/user.schema'

export type UserTcpResponse = WithId<Omit<User, 'roles'> & { roles: WithId<Role>[] }>
