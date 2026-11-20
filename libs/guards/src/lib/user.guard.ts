import { AUTH_TYPE_KEY, AuthTypeType } from '@common/constants/auth.constant'
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
import { getAccessToken } from '@common/utils/request.util'
import { MetadataKeys } from '@common/constants/common.constant'
import { AuthorizeResponseDto } from '@common/interfaces/tcp/authorizer/authorizer-response.interface'
import { map } from 'rxjs/operators'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'

@Injectable()
export class UserGuard implements CanActivate {
  private readonly logger = new Logger(UserGuard.name)
  constructor(
    private readonly reflector: Reflector,
    @Inject(TCP_SERVICES.AUTHORIZER_SERVICE) private readonly authorizerClient: TcpClient
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
      const processId = req[MetadataKeys.PROCESS_ID]

      const result = await this.verifyUserToken(token, processId)
      if (!result?.valid) {
        throw new UnauthorizedException('Token is invalid')
      }

      return true
    } catch (error) {
      this.logger.error({ error })
      throw new UnauthorizedException('Token is invalid')
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
}
