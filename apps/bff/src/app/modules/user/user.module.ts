import { Module } from '@nestjs/common'
import { ClientsModule } from '@nestjs/microservices'
import { TcpProvider } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { UserController } from './controllers/user.controller'

@Module({
  imports: [ClientsModule.registerAsync([TcpProvider(TCP_SERVICES.USER_ACCESS_SERVICE)])],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class UserModule {}
