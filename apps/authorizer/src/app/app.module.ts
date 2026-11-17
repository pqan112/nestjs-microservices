import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envFile, validateEnv } from '../config/env.config'
import { allConfigs } from '../config/config'
import { KeycloakModule } from './modules/keycloak/keycloak.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
    KeycloakModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
