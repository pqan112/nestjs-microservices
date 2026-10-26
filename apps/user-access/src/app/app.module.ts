import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envFile, validateEnv } from '../config/env.config'
import { allConfigs } from '../config/config'
import { RoleModule } from './modules/role/role.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
    RoleModule,
  ],
})
export class AppModule {}
