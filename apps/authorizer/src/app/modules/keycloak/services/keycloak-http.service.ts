import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios, { AxiosInstance, isAxiosError } from 'axios'
import { KEYCLOAK_CONFIG, KeycloakConfig } from '../../../../config/keycloak/keycloak.config'
import {
  CreateKeyCloakUserRequest,
  ExchangeClientTokenResponse,
  ExchangeUserTokenResponse,
} from '@common/interfaces/common'

@Injectable()
export class KeycloakHttpService {
  private readonly logger = new Logger(KeycloakHttpService.name)
  private readonly axiosInstance: AxiosInstance
  private realm: string
  private clientId: string
  private clientSecret: string

  constructor(private readonly configService: ConfigService) {
    const keycloakConfig = this.configService.getOrThrow<KeycloakConfig>(KEYCLOAK_CONFIG)

    this.axiosInstance = axios.create({
      baseURL: keycloakConfig.host,
    })

    this.realm = keycloakConfig.realm
    this.clientId = keycloakConfig.clientId
    this.clientSecret = keycloakConfig.clientSecret
  }

  async exchangeClientToken(): Promise<ExchangeClientTokenResponse> {
    const body = new URLSearchParams()
    body.append('client_id', this.clientId)
    body.append('client_secret', this.clientSecret)
    body.append('grant_type', 'client_credentials')
    body.append('scope', 'openid')

    const { data } = await this.axiosInstance.post(
      `/realms/${this.realm}/protocol/openid-connect/token`,
      body,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    return data
  }

  async createUser(data: CreateKeyCloakUserRequest): Promise<string> {
    const { email, firstName, lastName, password } = data

    const { access_token: accessToken } = await this.exchangeClientToken()

    const { headers } = await this.axiosInstance.post(
      `/admin/realms/${this.realm}/users`,
      {
        firstName,
        lastName,
        email,
        username: email,
        enabled: true,
        emailVerified: true,
        credentials: [{ type: 'password', value: password, temporary: false }],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    const userId = headers['location']?.split('/')?.pop()

    if (!userId) {
      throw new InternalServerErrorException('Could not create keycloak user')
    }

    this.logger.log('Created user with id: ', userId)

    return userId
  }

  async exchangeUserToken(params: {
    username: string
    password: string
  }): Promise<ExchangeUserTokenResponse> {
    const body = new URLSearchParams()
    body.append('client_id', this.clientId)
    body.append('client_secret', this.clientSecret)
    body.append('grant_type', 'password')
    body.append('scope', 'openid')
    body.append('username', params.username)
    body.append('password', params.password)

    try {
      const { data } = await this.axiosInstance.post(
        `/realms/${this.realm}/protocol/openid-connect/token`,
        body,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )

      return data
    } catch (error) {
      // Keycloak answers 401 (or 400 invalid_grant for a disabled account) when the user
      // credentials are rejected. Anything else is an infrastructure error: let it bubble up.
      if (isAxiosError(error) && [400, 401].includes(error.response?.status ?? 0)) {
        throw new UnauthorizedException('Invalid username or password')
      }
      throw error
    }
  }
}
