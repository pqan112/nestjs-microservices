import { TcpProvider } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { AuthorizerController } from './controllers/authorizer.controller'

@Module({
  imports: [ClientsModule.registerAsync([TcpProvider(TCP_SERVICES.AUTHORIZER_SERVICE)])],
  controllers: [AuthorizerController],
  providers: [],
  exports: [],
})
export class AuthorizerModule {}
