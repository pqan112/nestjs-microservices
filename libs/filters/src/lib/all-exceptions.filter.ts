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
    if (host.getType() !== 'http') return

    const ctx = host.switchToHttp()
    const request: Request & {
      [MetadataKeys.PROCESS_ID]: string
      [MetadataKeys.START_TIME]: number
    } = ctx.getRequest()
    const response = ctx.getResponse<Response>()

    const { statusCode, message, data } = this.parse(exception)

    if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        { path: request.url, message },
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

  private parse(exception: unknown): {
    statusCode: number
    message: string
    data: unknown
  } {
    // not an HttpException (TypeError, DB driver error...): never leak internals to the client
    if (!(exception instanceof HttpException)) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: HTTP_MESSAGE.INTERNAL_SERVER_ERROR,
        data: null,
      }
    }

    const statusCode = exception.getStatus()
    const body = exception.getResponse()

    // string: exception built with a plain message, e.g. `new HttpException('Forbidden', 403)`
    // or `new ForbiddenException()` with no argument. Nothing else to extract.
    if (typeof body === 'string') {
      return { statusCode, message: body, data: null }
    }

    // object: Nest's built-in exceptions (BadRequestException('x'), NotFoundException...)
    // wrap their argument as `{ statusCode, message, error }`. `message` is a string for a
    // plain message, but an array when the argument was a list, which is what
    // CustomZodValidationPipe passes (the zod issues). ResponseDto.message must be a string,
    // so keep the issues as `data` and use the short `error` label ("Unprocessable Entity")
    // as the message.
    const { message, error } = body as { message?: unknown; error?: string }
    if (Array.isArray(message)) {
      return { statusCode, message: error ?? exception.message, data: message }
    }
    return {
      statusCode,
      message: typeof message === 'string' ? message : exception.message,
      data: null,
    }
  }
}
