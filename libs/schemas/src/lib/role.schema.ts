import z from 'zod'
import { PERMISSION, ROLE } from '@common/constants/enum/role.enum'
import { baseSchema } from './base.schema'

export const roleSchema = baseSchema.extend({
  name: z.enum(ROLE).default(ROLE.ACCOUNTANT),
  description: z.string().optional(),
  permissions: z.array(z.enum(PERMISSION)).default([]),
})

export type Role = z.infer<typeof roleSchema>

export type CreateRole = Omit<Role, 'createdAt' | 'updatedAt'>
export type UpdateRole = Partial<CreateRole>
