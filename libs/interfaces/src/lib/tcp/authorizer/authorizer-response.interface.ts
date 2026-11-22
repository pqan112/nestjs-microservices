import { PERMISSION } from '@common/constants/enum/role.enum'
import { roleSchema } from '@common/schemas/role.schema'
import { userSchema } from '@common/schemas/user.schema'
import { JwtPayload } from 'jsonwebtoken'
import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { LoginResponseDto } from '../../gateway/authorizer'

export type LoginTcpResponse = LoginResponseDto

export const authorizedMetadataSchema = z.object({
  userId: z.string().nullable().default(null),
  user: userSchema
    .omit({ roles: true })
    .extend({ roles: z.array(roleSchema) })
    .nullable()
    .default(null),
  permissions: z.array(z.enum(PERMISSION)).default([]),
  jwt: z.custom<JwtPayload>().nullish(),
})

export const authorizeResponseSchema = z.object({
  valid: z.boolean().default(false),
  metadata: authorizedMetadataSchema.prefault({}),
})

export class AuthorizedMetadataDto extends createZodDto(authorizedMetadataSchema) {}
export class AuthorizeResponseDto extends createZodDto(authorizeResponseSchema) {}
