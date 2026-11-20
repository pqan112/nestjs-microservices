import { ObjectId } from 'mongodb'
import { CreateUserRequestDto } from '@common/interfaces/gateway/user'
import { CreateUser } from '@common/schemas/user.schema'

// `password` bị loại ra để không lưu thẳng vào document.
export const createUserRequestMapping = (
  data: CreateUserRequestDto,
  userId: string
): CreateUser => {
  const { password: _password, ...rest } = data
  return {
    ...rest,
    roles: rest.roles.map((role) => new ObjectId(role)),
    userId,
  }
}
