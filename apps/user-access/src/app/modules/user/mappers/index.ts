import { ObjectId } from 'mongodb'
import { CreateUserTcpRequest } from '@common/interfaces/tcp/user'
import { CreateUser } from '@common/schemas/user.schema'

// `password` bị loại ra để không lưu thẳng vào document.
export const createUserRequestMapping = ({
  password: _password,
  ...data
}: CreateUserTcpRequest): CreateUser => ({
  ...data,
  roles: data.roles.map((role) => new ObjectId(role)),
})
