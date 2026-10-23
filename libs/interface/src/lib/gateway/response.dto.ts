import { createZodDto } from 'nestjs-zod'
import { HTTP_MESSAGE } from '@common/constants/http-message.enum'
import z from 'zod'
import { HttpStatus } from '@nestjs/common'

export const ResponseSchema = z.object({
  message: z.string().default(HTTP_MESSAGE.OK),
  data: z.any().optional(),
  processId: z.string().optional(),
  statusCode: z.number().default(HttpStatus.OK),
  duration: z.string().optional(),
})

export class ResponseDto<T = any> extends createZodDto(ResponseSchema) {
  declare data?: T

  // nestjs-zod types `create(input: unknown)`; narrow it so fields autocomplete and type-check
  static override create<D>(input: Partial<ResponseDto<D>>) {
    return super.create(input) as ResponseDto<D>
  }
}
