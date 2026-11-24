import { ERROR_CODE } from '@common/constants/enum/error-code.enum'
import { GRPC_SERVICES } from '@common/constants/enum/grpc-service.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { LoginRequestDto, LoginResponseDto } from '@common/interfaces/gateway/authorizer'
import { UserAccessService } from '@common/interfaces/grpc/user-access'
import { AuthorizeResponseDto } from '@common/interfaces/tcp/authorizer'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { Inject, Injectable, Logger, OnModuleInit, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientGrpc } from '@nestjs/microservices'
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken'
import jwksRsa, { JwksClient } from 'jwks-rsa'
import { firstValueFrom, map } from 'rxjs'
import { KEYCLOAK_CONFIG, KeycloakConfig } from '../../../../configuration/keycloak/keycloak.config'
import { KeycloakHttpService } from '../../keycloak/services/keycloak-http.service'

@Injectable()
export class AuthorizerService implements OnModuleInit {
  private userAccessService: UserAccessService
  private readonly logger = new Logger(AuthorizerService.name)
  private jwksClient: JwksClient
  constructor(
    private readonly keycloakHttpService: KeycloakHttpService,
    private readonly configService: ConfigService,
    @Inject(GRPC_SERVICES.USER_ACCESS_SERVICE) private readonly grpcUserAccessClient: ClientGrpc
  ) {
    const keycloakConfig = this.configService.getOrThrow<KeycloakConfig>(KEYCLOAK_CONFIG)
    const host = keycloakConfig.host
    const realm = keycloakConfig.realm

    this.jwksClient = jwksRsa({
      jwksUri: `${host}/realms/${realm}/protocol/openid-connect/certs`,
      cache: true,
      rateLimit: true,
    })
  }

  onModuleInit() {
    this.userAccessService =
      this.grpcUserAccessClient.getService<UserAccessService>('UserAccessService')
  }

  async login(params: LoginRequestDto): Promise<LoginResponseDto> {
    const { password, username } = params

    const { access_token: accessToken, refresh_token: refreshToken } =
      await this.keycloakHttpService.exchangeUserToken({ username, password })

    return {
      accessToken,
      refreshToken,
    }
  }

  async verifyUserToken(token: string, processId: string): Promise<AuthorizeResponseDto> {
    const decoded = jwt.decode(token, { complete: true }) as Jwt
    if (!decoded || !decoded.header || !decoded.header.kid) {
      throw new UnauthorizedException(ERROR_CODE.AUTH_INVALID_TOKEN_STRUCTURE)
    }

    try {
      const key = await this.jwksClient.getSigningKey(decoded.header.kid)
      const publicKey = key.getPublicKey()
      const payload = jwt.verify(token, publicKey, { algorithms: ['RS256'] }) as JwtPayload
      this.logger.debug({ payload })

      const user = await this.validateUser(payload.sub, processId)

      return {
        valid: true,
        metadata: {
          jwt: payload,
          permissions: user.roles.flatMap((role) => role.permissions),
          user,
          userId: user.userId,
        },
      }
    } catch (error) {
      this.logger.error({ error })
      throw new UnauthorizedException(ERROR_CODE.AUTH_INVALID_TOKEN)
    }
  }

  private async validateUser(token: string, processId: string) {
    const user = await firstValueFrom(
      this.userAccessService.getByUserId({ processId, userId: token }).pipe(map((res) => res.data))
    )
    if (!user) {
      throw new UnauthorizedException(ERROR_CODE.USER_NOT_FOUND)
    }
    return user
  }
}
