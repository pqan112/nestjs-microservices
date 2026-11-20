import { createZodDto } from 'nestjs-zod'
import z from 'zod'

export const RequestSchema = z.object({
  data: z.any().optional(),
  processId: z.string().optional(),
})

export class TCPRequestDto<T = any> extends createZodDto(RequestSchema) {
  declare data?: T
}
