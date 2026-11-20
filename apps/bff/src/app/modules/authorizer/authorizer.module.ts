import { Module } from '@nestjs/common'
import { AuthorizerController } from './controllers/authorizer.controller'

@Module({
  imports: [],
  controllers: [AuthorizerController],
  providers: [],
  exports: [],
})
export class AuthorizerModule {}
