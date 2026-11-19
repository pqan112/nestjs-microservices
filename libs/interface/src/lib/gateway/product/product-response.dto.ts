import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { baseEntityResponseSchema } from '../common/base-entity-response.dto'

export const productResponseSchema = baseEntityResponseSchema.extend({
  name: z.string(),
  description: z.string().optional(),
  sku: z.string(),
  unit: z.string(),
  price: z.number(),
  vatRate: z.number(),
})

export type ProductResponse = z.infer<typeof productResponseSchema>

export class ProductResponseDto extends createZodDto(productResponseSchema) {}

// Mobile list view does not need the long free-text description.
export const mobileProductResponseSchema = productResponseSchema.omit({ description: true })

export class MobileProductResponseDto extends createZodDto(mobileProductResponseSchema) {}
