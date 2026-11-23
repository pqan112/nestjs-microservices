import { AUTH_TYPE_KEY, AuthTypeType } from '@common/constants/auth.constant'
import { ERROR_CODE } from '@common/constants/enum/error-code.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { firstValueFrom, Observable } from 'rxjs'
import { getAccessToken, setUserData } from '@common/utils/request.util'
import { MetadataKeys } from '@common/constants/common.constant'
import { AuthorizeResponseDto } from '@common/interfaces/tcp/authorizer/authorizer-response.interface'
import { map } from 'rxjs/operators'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { createHash } from 'crypto'

@Injectable()
export class UserGuard implements CanActivate {
  private readonly logger = new Logger(UserGuard.name)
  constructor(
    private readonly reflector: Reflector,
    @Inject(TCP_SERVICES.AUTHORIZER_SERVICE) private readonly authorizerClient: TcpClient,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const authType = this.reflector.getAllAndOverride<AuthTypeType | undefined>(AUTH_TYPE_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    const req = context.switchToHttp().getRequest()

    if (authType === 'None') return true

    return this.verifyToken(req)
  }

  private async verifyToken(req: any): Promise<boolean> {
    try {
      const token = getAccessToken(req)
      const cacheKey = this.generateCacheKey(token)
      const processId = req[MetadataKeys.PROCESS_ID]

      const cachedData = await this.cacheManager.get<AuthorizeResponseDto>(cacheKey)
      if (cachedData) {
        setUserData(req, cachedData)
        return true
      }

      const result = await this.verifyUserToken(token, processId)
      if (!result?.valid) {
        throw new UnauthorizedException(ERROR_CODE.AUTH_INVALID_TOKEN)
      }

      this.logger.debug(`set user data to cache: ${cacheKey}`)

      setUserData(req, result)
      this.cacheManager
        .set(cacheKey, result, 30 * 60 * 1000)
        .catch((error) => this.logger.warn({ error }))

      return true
    } catch (error) {
      this.logger.error({ error })
      throw new UnauthorizedException(ERROR_CODE.AUTH_INVALID_TOKEN)
    }
  }

  private async verifyUserToken(token: string, processId: string) {
    return firstValueFrom(
      this.authorizerClient
        .send<AuthorizeResponseDto, string>(TCP_REQUEST_MESSAGE.AUTHORIZER.VERIFY_USER_TOKEN, {
          data: token,
          processId,
        })
        .pipe(map((data) => data.data))
    )
  }

  generateCacheKey(token: string): string {
    const hash = createHash('sha256').update(token).digest('hex')
    return `user-token:${hash}`
  }
}
