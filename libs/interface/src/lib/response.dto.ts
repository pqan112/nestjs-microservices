import { createZodDto } from 'nestjs-zod'
import { ResponseSchema } from './response.model'

export class ResponseDto<T = any> extends createZodDto(ResponseSchema) {
  declare data?: T
}
