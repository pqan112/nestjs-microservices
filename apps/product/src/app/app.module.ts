import { createConfigModule } from '@common/configuration/base.config'
import { Module } from '@nestjs/common'
import { validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'
import { ProductModule } from './modules/product/product.module'

@Module({
  imports: [createConfigModule(validateEnv, allConfigs), ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
