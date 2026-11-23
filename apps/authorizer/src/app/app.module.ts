import { createConfigModule } from '@common/configuration/base.config'
import { Module } from '@nestjs/common'
import { validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'
import { KeycloakModule } from './modules/keycloak/keycloak.module'
import { AuthorizerModule } from './modules/authorizer/authorizer.module'

@Module({
  imports: [createConfigModule(validateEnv, allConfigs), KeycloakModule, AuthorizerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
