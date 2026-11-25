import { PERMISSION } from '@common/constants/enum/role.enum'
import { roleSchema } from '@common/schemas/role.schema'
import { userSchema } from '@common/schemas/user.schema'
import { JwtPayload } from 'jsonwebtoken'
import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { LoginResponseDto } from '../../gateway/authorizer'
import { Serialized } from '../../common/serialized.type'

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

// Dạng thật trên đường truyền gRPC/cache (ngày là string); các guard/decorator dùng type này.
export type AuthorizeResponseWire = Serialized<AuthorizeResponseDto>
