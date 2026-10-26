import { MongoModule } from '@common/configuration/mongo.config'
import { Module } from '@nestjs/common'
import { UserController } from './controllers/user.controller'
import { UserService } from './services/user.service'
import { UserRepo } from './repos/user.repo'

@Module({
  imports: [MongoModule],
  controllers: [UserController],
  providers: [UserService, UserRepo],
})
export class UserModule {}
