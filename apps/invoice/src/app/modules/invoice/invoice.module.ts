import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { MongoModule } from '@common/configuration/mongo.config'
import { TcpProvider } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { InvoiceController } from './controllers/invoice.controller'
import { InvoiceRepo } from './repos/invoice.repo'
import { InvoiceService } from './services/invoice.service'

@Module({
  imports: [
    MongoModule,
    ClientsModule.registerAsync([TcpProvider(TCP_SERVICES.PDF_GENERATOR_SERVICE)]),
  ],
  controllers: [InvoiceController],
  providers: [InvoiceRepo, InvoiceService],
})
export class InvoiceModule {}
