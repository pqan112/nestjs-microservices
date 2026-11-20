import { LoginRequestDto, LoginResponseDto } from '@common/interfaces/gateway/authorizer'
import { Injectable } from '@nestjs/common'
import { KeycloakHttpService } from '../../keycloak/services/keycloak-http.service'

@Injectable()
export class AuthorizerService {
  constructor(private readonly keycloakHttpService: KeycloakHttpService) {}

  async login(params: LoginRequestDto): Promise<LoginResponseDto> {
    const { password, username } = params

    const { access_token: accessToken, refresh_token: refreshToken } =
      await this.keycloakHttpService.exchangeUserToken({ username, password })

    return {
      accessToken,
      refreshToken,
    }
  }
}
