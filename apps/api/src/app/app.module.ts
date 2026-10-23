import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HealthController } from './health.controller'
import { TodosController } from './todos.controller'
import { TodosService } from './todos.service'
import { ConfigModule } from '@nestjs/config'
import { envFile, validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
  ],
  controllers: [AppController, HealthController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
