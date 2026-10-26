import { CallHandler, ExecutionContext, HttpStatus, NestInterceptor } from '@nestjs/common'
import { map, Observable } from 'rxjs'
import { Request } from 'express'
import { MetadataKeys } from '@common/constants/common.constant'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'

export class ExceptionInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp()
    const request: Request & {
      [MetadataKeys.PROCESS_ID]: string
      [MetadataKeys.START_TIME]: number
    } = ctx.getRequest()

    const processId = request[MetadataKeys.PROCESS_ID]
    const startTime = request[MetadataKeys.START_TIME]

    return next.handle().pipe(
      map((data: unknown) => {
        const durationMs = Date.now() - startTime
        // handlers may return void/primitives: wrap them so the response keeps the ResponseDto shape
        const body: ResponseDto =
          data !== null && typeof data === 'object'
            ? (data as ResponseDto)
            : { message: HTTP_MESSAGE.OK, statusCode: HttpStatus.OK, data }
        body.processId = processId
        body.duration = `${durationMs} ms`

        return body
      })
    )
  }
}
