import { HttpStatus } from '@nestjs/common'
import { HTTP_MESSAGE } from '@common/constants/http-message.enum'
import { z } from 'zod'

export const ResponseSchema = z.object({
  message: z.string().default(HTTP_MESSAGE.OK),
  data: z.any().optional(),
  processID: z.string().optional(),
  statusCode: z.number().default(HttpStatus.OK),
  duration: z.string().optional(),
})
