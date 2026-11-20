import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { baseEntityResponseSchema } from '../common/base-entity-response.dto'

export const createUserRequestSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  roles: z.array(z.string()),
  password: z.string().min(1),
})

export class CreateUserRequestDto extends createZodDto(createUserRequestSchema) {}

export const userResponseSchema = baseEntityResponseSchema.extend({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  roles: z.array(z.string()),
})

export class UserResponseDto extends createZodDto(userResponseSchema) {}
