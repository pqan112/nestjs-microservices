import { createZodDto } from 'nestjs-zod'
import { HTTP_MESSAGE } from '@common/constants/http-message.enum'
import z from 'zod'
import { HttpStatus } from '@nestjs/common'

export const ResponseSchema = z.object({
  code: z.string().default(HTTP_MESSAGE.OK),
  data: z.any().optional(),
  error: z.string().optional(),
  statusCode: z.number().default(HttpStatus.OK),
})

export class TCPResponseDto<T = any> extends createZodDto(ResponseSchema) {
  declare data?: T

  // nestjs-zod types `create(input: unknown)`; narrow it so fields autocomplete and type-check
  static override create<D>(input: Partial<TCPResponseDto<D>>) {
    return super.create(input) as TCPResponseDto<D>
  }

  static success<D>(data: D) {
    return this.create<D>({ data, code: HTTP_MESSAGE.OK, statusCode: HttpStatus.OK })
  }
}
