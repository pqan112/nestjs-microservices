import { MongoModule } from '@common/configuration/mongo.config'
import { Module } from '@nestjs/common'
import { UserController } from './controllers/user.controller'
import { UserService } from './services/user.service'
import { UserRepo } from './repos/user.repo'
import { ClientsModule } from '@nestjs/microservices'
import { TcpProvider } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { UserGrpcController } from './controllers/user-grpc.controller'

@Module({
  imports: [
    MongoModule,
    ClientsModule.registerAsync([TcpProvider(TCP_SERVICES.AUTHORIZER_SERVICE)]),
  ],
  controllers: [UserController, UserGrpcController],
  providers: [UserService, UserRepo],
})
export class UserModule {}
