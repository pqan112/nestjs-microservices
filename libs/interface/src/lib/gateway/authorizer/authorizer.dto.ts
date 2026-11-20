import { createZodDto } from 'nestjs-zod'
import z from 'zod'

export const loginRequestSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

export const loginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
})

export class LoginRequestDto extends createZodDto(loginRequestSchema) {}
export class LoginResponseDto extends createZodDto(loginResponseSchema) {}
