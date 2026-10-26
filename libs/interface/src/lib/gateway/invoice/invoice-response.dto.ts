import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { INVOICE_STATUS } from '@common/constants/enum/invoice.enum'
import { baseEntityResponseSchema } from '../common/base-entity-response.dto'

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

export const invoiceResponseSchema = baseEntityResponseSchema.extend({
  client: clientResponseSchema,
  items: z.array(itemResponseSchema),
  totalAmount: z.number(),
  vatAmount: z.number(),
  status: z.enum(INVOICE_STATUS),
  supervisorId: z.string().optional(),
  fileUrl: z.string().optional(),
})

export type InvoiceResponse = z.infer<typeof invoiceResponseSchema>

export class InvoiceResponseDto extends createZodDto(invoiceResponseSchema) {}
