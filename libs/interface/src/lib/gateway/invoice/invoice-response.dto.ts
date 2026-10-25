import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { INVOICE_STATUS } from '@common/constants/invoice.enum'

const clientResponseSchema = z.object({
  name: z.string(),
  email: z.string(),
  address: z.string(),
})

const itemResponseSchema = z.object({
  productId: z.string(),
  name: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  vatRate: z.number(),
  total: z.number(),
})

// Khớp output của `toResponse` (`_id` -> `id`).
export const invoiceResponseSchema = z.object({
  id: z.string(),
  client: clientResponseSchema,
  items: z.array(itemResponseSchema),
  totalAmount: z.number(),
  vatAmount: z.number(),
  status: z.enum(INVOICE_STATUS),
  supervisorId: z.string().optional(),
  fileUrl: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type InvoiceResponse = z.infer<typeof invoiceResponseSchema>

export class InvoiceResponseDto extends createZodDto(invoiceResponseSchema) {}
