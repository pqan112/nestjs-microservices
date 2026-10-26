import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { baseEntityResponseSchema } from '../common/base-entity-response.dto'

export const userResponseSchema = baseEntityResponseSchema.extend({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  roles: z.array(z.string()),
})

export type UserResponse = z.infer<typeof userResponseSchema>

export class UserResponseDto extends createZodDto(userResponseSchema) {}
