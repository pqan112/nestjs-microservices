import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envFile, validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'
import { MongoModule } from '@common/configuration/mongo.config'
import { InvoiceModule } from './modules/invoice/invoice.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
    MongoModule,
    InvoiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
