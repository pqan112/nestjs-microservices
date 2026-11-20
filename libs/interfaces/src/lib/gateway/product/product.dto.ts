import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { baseEntityResponseSchema } from '../common/base-entity-response.dto'

export const createProductRequestSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  sku: z.string().min(1),
  unit: z.string().min(1),
  price: z.number(),
  vatRate: z.number(),
})

export class CreateProductRequestDto extends createZodDto(createProductRequestSchema) {}

export const productResponseSchema = baseEntityResponseSchema.extend({
  name: z.string(),
  description: z.string().optional(),
  sku: z.string(),
  unit: z.string(),
  price: z.number(),
  vatRate: z.number(),
})

export class ProductResponseDto extends createZodDto(productResponseSchema) {}

// Mobile list view does not need the long free-text description.
export const mobileProductResponseSchema = productResponseSchema.omit({ description: true })

export class MobileProductResponseDto extends createZodDto(mobileProductResponseSchema) {}
