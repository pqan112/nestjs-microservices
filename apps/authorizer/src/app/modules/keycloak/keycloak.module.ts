import { Module } from '@nestjs/common'
import { KeycloakHttpService } from './services/keycloak-http.service'
import { KeycloakController } from './controllers/keycloak.controller'

@Module({
  imports: [],
  controllers: [KeycloakController],
  providers: [KeycloakHttpService],
  exports: [KeycloakHttpService],
})
export class KeycloakModule {}
