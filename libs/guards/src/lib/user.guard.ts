import { AUTH_TYPE_KEY, AuthTypeType } from '@common/constants/auth.constant'
import { MetadataKeys } from '@common/constants/common.constant'
import { ERROR_CODE } from '@common/constants/enum/error-code.enum'
import { GRPC_SERVICES } from '@common/constants/enum/grpc-service.enum'
import { AuthorizerService } from '@common/interfaces/grpc/authorizer'
import { AuthorizeResponseWire } from '@common/interfaces/tcp/authorizer/authorizer-response.interface'
import { getAccessToken, setUserData } from '@common/utils/request.util'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ClientGrpc } from '@nestjs/microservices'
import { Cache } from 'cache-manager'
import { createHash } from 'crypto'
import { firstValueFrom, Observable } from 'rxjs'

@Injectable()
export class UserGuard implements CanActivate, OnModuleInit {
  private readonly logger = new Logger(UserGuard.name)
  private authorizerService: AuthorizerService
  constructor(
    private readonly reflector: Reflector,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    @Inject(GRPC_SERVICES.AUTHORIZER_SERVICE) private readonly grpcAuthorizerClient: ClientGrpc
  ) {}

  onModuleInit() {
    this.authorizerService =
      this.grpcAuthorizerClient.getService<AuthorizerService>('AuthorizerService')
  }

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

      const cachedData = await this.cacheManager.get<AuthorizeResponseWire>(cacheKey)
      if (cachedData) {
        setUserData(req, cachedData)
        return true
      }

      const response = await firstValueFrom(
        this.authorizerService.verifyUserToken({ processId, token })
      )
      const { data: result } = response
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

  generateCacheKey(token: string): string {
    const hash = createHash('sha256').update(token).digest('hex')
    return `user-token:${hash}`
  }
}
