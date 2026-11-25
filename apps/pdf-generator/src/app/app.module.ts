import { createConfigModule } from '@common/configuration/base.config'
import { Module } from '@nestjs/common'
import { validateEnv } from '../configuration/env.config'
import { allConfigs } from '../configuration/configuration'
import { PdfModule } from './modules/pdf/pdf.module'

@Module({
  imports: [createConfigModule(validateEnv, allConfigs), PdfModule],
})
export class AppModule {}
