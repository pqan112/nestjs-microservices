import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common'
import { catchError, Observable, tap } from 'rxjs'
import { RpcException } from '@nestjs/microservices'
import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'
import { MetadataKeys } from '@common/constants/common.constant'

@Injectable()
export class TcpLoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const startTime = Date.now()
    const handler = context.getHandler()
    const handlerName = handler.name

    const args = context.getArgs()
    const param = args[0]
    const processId = param[MetadataKeys.PROCESS_ID]

    Logger.log(
      `TCP >> Start process '${processId}' >> method: '${handlerName}' at '${startTime}' >> param: ${JSON.stringify(param)}`
    )

    return next.handle().pipe(
      tap(() =>
        Logger.log(
          `TCP >> End process '${processId}' >> method: '${handlerName}' after: '${Date.now() - startTime}ms'`
        )
      ),
      catchError((error) => {
        const duration = Date.now() - startTime
        Logger.error(
          `TCP » Error process '${processId}': ${error.message} >> data: ${JSON.stringify(
            error
          )}, after: '${duration}ms'`
        )

        throw new RpcException({
          code: error.status || error.code || error.error?.code || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error?.response?.message || error?.message || HTTP_MESSAGE.INTERNAL_SERVER_ERROR,
        })
      })
    )
  }
}
