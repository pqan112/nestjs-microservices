import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envFile, validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'
import { ProductModule } from './modules/product/product.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
