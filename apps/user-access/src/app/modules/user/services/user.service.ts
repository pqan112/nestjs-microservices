import { BadRequestException, Injectable } from '@nestjs/common'
import { UserRepo } from '../repos/user.repo'
import { createUserRequestMapping } from '../mappers'
import { CreateUserTcpRequest } from '@common/interfaces/tcp/user'
import { ERROR_CODE } from '@common/constants/enum/error-code.enum'

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  async create(params: CreateUserTcpRequest) {
    const isExists = await this.userRepo.exists(params.email)

    if (isExists) {
      throw new BadRequestException(ERROR_CODE.USER_ALREADY_EXISTS)
    }

    const input = createUserRequestMapping(params)

    return this.userRepo.create(input)
  }
}
