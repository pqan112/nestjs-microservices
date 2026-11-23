import { createConfigModule } from '@common/configuration/base.config'
import { Module } from '@nestjs/common'
import { validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'
import { RoleModule } from './modules/role/role.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [createConfigModule(validateEnv, allConfigs), RoleModule, UserModule],
})
export class AppModule {}
