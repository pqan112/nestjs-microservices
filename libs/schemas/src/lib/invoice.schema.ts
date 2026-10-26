import z from 'zod'
import { INVOICE_STATUS } from '@common/constants/enum/invoice.enum'
import { baseSchema } from './base.schema'

export const clientSchema = z.object({
  name: z.string(),
  email: z.string(),
  address: z.string(),
})

export const itemSchema = z.object({
  productId: z.string(),
  name: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  vatRate: z.number(),
  total: z.number(),
})

export const invoiceSchema = baseSchema.extend({
  client: clientSchema,
  totalAmount: z.number(),
  vatAmount: z.number(),
  status: z.enum(INVOICE_STATUS).default(INVOICE_STATUS.CREATED),
  items: z.array(itemSchema),
  supervisorId: z.string().optional(),
  fileUrl: z.string().optional(),
})

export type Client = z.infer<typeof clientSchema>
export type Item = z.infer<typeof itemSchema>
export type Invoice = z.infer<typeof invoiceSchema>

export type CreateInvoice = Omit<Invoice, 'createdAt' | 'updatedAt'>
export type UpdateInvoice = Partial<CreateInvoice>
