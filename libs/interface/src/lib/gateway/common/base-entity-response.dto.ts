import z from 'zod'

export const baseEntityResponseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
