import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { MetadataKeys } from '@common/constants/common.constant'
import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name)

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request: Request & {
      [MetadataKeys.PROCESS_ID]: string
      [MetadataKeys.START_TIME]: number
    } = ctx.getRequest()
    const response = ctx.getResponse<Response>()

    const { statusCode, message, data } = this.parse(exception)

    if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        { path: request.url, message, exception: JSON.stringify(exception) },
        exception instanceof Error ? exception.stack : undefined
      )
    } else {
      this.logger.warn({ path: request.url, message, data })
    }

    const body: ResponseDto = {
      data,
      message,
      statusCode,
      duration: `${Date.now() - request[MetadataKeys.START_TIME]} ms`,
      processId: request[MetadataKeys.PROCESS_ID],
    }
    response.status(statusCode).json(body)
  }

  private isRpcError(exception: unknown): exception is { code: number; message: string } {
    const { code, message } = (exception ?? {}) as { code?: unknown; message?: unknown }
    return (
      typeof code === 'number' &&
      code >= HttpStatus.BAD_REQUEST &&
      code < 600 &&
      typeof message === 'string'
    )
  }

  private parse(exception: unknown): {
    statusCode: number
    message: string
    data: unknown
  } {
    // error from a TCP microservice: TcpLoggingInterceptor rethrows it as
    // RpcException({ code, message }), which reaches the gateway as a plain object.
    // `code` is only trusted when it is an HTTP error status (a DB driver code is not).
    if (this.isRpcError(exception)) {
      return { statusCode: exception.code, message: exception.message, data: null }
    }

    // TypeError, DB driver error...: never leak internals to the client
    if (!(exception instanceof HttpException)) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: HTTP_MESSAGE.INTERNAL_SERVER_ERROR,
        data: null,
      }
    }

    const statusCode = exception.getStatus()
    const body = exception.getResponse() as { message?: unknown; error?: string }

    // CustomZodValidationPipe passes the zod issues as an array. ResponseDto.message must be a
    // string, so keep the issues as `data` and use the short `error` label as the message.
    if (Array.isArray(body.message)) {
      return { statusCode, message: body.error ?? exception.message, data: body.message }
    }
    return { statusCode, message: exception.message, data: null }
  }
}
