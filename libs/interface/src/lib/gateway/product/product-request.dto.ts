import { createZodDto } from 'nestjs-zod'
import z from 'zod'

export const createProductRequestSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  sku: z.string().min(1),
  unit: z.string().min(1),
  price: z.number(),
  vatRate: z.number(),
})

export type CreateProductRequest = z.infer<typeof createProductRequestSchema>

export class CreateProductRequestDto extends createZodDto(createProductRequestSchema) {}
