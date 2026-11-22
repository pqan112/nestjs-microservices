import z from 'zod'
import { PERMISSION, ROLE } from '@common/constants/enum/role.enum'

// Role là dữ liệu seed tĩnh: không extend baseSchema nên không có createdAt/updatedAt.
export const roleSchema = z.object({
  name: z.enum(ROLE).default(ROLE.ACCOUNTANT),
  description: z.string().optional(),
  permissions: z.array(z.enum(PERMISSION)).default([]),
})

export type Role = z.infer<typeof roleSchema>

export type CreateRole = Role
export type UpdateRole = Partial<CreateRole>
