import { Module } from '@nestjs/common'
import { MongoModule } from '@common/configuration/mongo.config'
import { InvoiceController } from './controllers/invoice.controller'
import { InvoiceRepo } from './repos/invoice.repo'
import { InvoiceService } from './services/invoice.service'

@Module({
  imports: [MongoModule],
  controllers: [InvoiceController],
  providers: [InvoiceRepo, InvoiceService],
})
export class InvoiceModule {}
