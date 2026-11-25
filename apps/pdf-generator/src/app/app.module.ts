import { createConfigModule } from '@common/configuration/base.config'
import { Module } from '@nestjs/common'
import { validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'
import { InvoiceModule } from './modules/invoice/invoice.module'

@Module({
  imports: [createConfigModule(validateEnv, allConfigs), InvoiceModule],
})
export class AppModule {}
