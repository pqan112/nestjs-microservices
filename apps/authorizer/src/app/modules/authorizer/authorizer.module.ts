import { Module } from '@nestjs/common'
import { KeycloakModule } from '../keycloak/keycloak.module'
import { AuthorizerController } from './controllers/authorizer.controller'
import { AuthorizerService } from './services/authorizer.service'
import { ClientsModule } from '@nestjs/microservices'
import { TcpProvider } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'

@Module({
  imports: [
    KeycloakModule,
    ClientsModule.registerAsync([TcpProvider(TCP_SERVICES.USER_ACCESS_SERVICE)]),
  ],
  controllers: [AuthorizerController],
  providers: [AuthorizerService],
})
export class AuthorizerModule {}
