import { createZodDto } from 'nestjs-zod'
import z from 'zod'

export const clientRequestSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  address: z.string().min(1),
})

export const itemRequestSchema = z.object({
  productId: z.string().min(1),
  name: z.string().min(1),
  quantity: z.number(),
  unitPrice: z.number(),
  vatRate: z.number(),
  total: z.number(),
})

export const createInvoiceRequestSchema = z.object({
  client: clientRequestSchema,
  items: z.array(itemRequestSchema).min(1),
})

export type ClientRequest = z.infer<typeof clientRequestSchema>
export type ItemRequest = z.infer<typeof itemRequestSchema>
export type CreateInvoiceRequest = z.infer<typeof createInvoiceRequestSchema>

export class ClientRequestDto extends createZodDto(clientRequestSchema) {}

export class ItemRequestDto extends createZodDto(itemRequestSchema) {}

export class CreateInvoiceRequestDto extends createZodDto(createInvoiceRequestSchema) {}
