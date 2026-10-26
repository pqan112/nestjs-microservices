import { createZodDto } from 'nestjs-zod'
import z from 'zod'

export const createUserRequestSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  roles: z.array(z.string()),
  password: z.string().min(1),
})

export type CreateUserRequest = z.infer<typeof createUserRequestSchema>

export class CreateUserRequestDto extends createZodDto(createUserRequestSchema) {}
