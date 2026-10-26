import { Injectable } from '@nestjs/common'
import { RoleRepo } from '../repos/role.repo'
import { ROLE } from '@common/constants/enum/role.enum'
import { toResponse } from '@common/schemas/mongo.mapper'

@Injectable()
export class RoleService {
  constructor(private readonly roleRepo: RoleRepo) {}

  async getAll() {
    const roles = await this.roleRepo.findAll()
    return roles.map(toResponse)
  }

  async getByName(name: ROLE) {
    const role = await this.roleRepo.findByName(name)
    return toResponse(role)
  }

  async getById(id: string) {
    const role = await this.roleRepo.findById(id)
    return toResponse(role)
  }
}
