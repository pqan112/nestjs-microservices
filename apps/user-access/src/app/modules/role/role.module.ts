import { MongoModule } from '@common/configuration/mongo.config'
import { Module } from '@nestjs/common'
import { RoleService } from './services/role.service'
import { RoleRepo } from './repos/role.repo'

@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [RoleService, RoleRepo],
})
export class RoleModule {}
