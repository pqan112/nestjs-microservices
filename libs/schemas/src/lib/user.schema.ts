import z from 'zod'
import { ObjectId } from 'mongodb'
import { baseSchema } from './base.schema'

export const userSchema = baseSchema.extend({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  userId: z.string().optional(),
  roles: z.array(z.instanceof(ObjectId)).default([]),
})

export type User = z.infer<typeof userSchema>

export type CreateUser = Omit<User, 'createdAt' | 'updatedAt'>
export type UpdateUser = Partial<CreateUser>
