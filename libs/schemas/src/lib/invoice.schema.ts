import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { INVOICE_STATUS } from '@common/constants/invoice.enum'
import { baseSchema, omitBase } from './base.schema'

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

export const createInvoiceSchema = invoiceSchema.omit(omitBase)

export class CreateInvoiceDto extends createZodDto(createInvoiceSchema) {}

// `.partial()` vẫn áp default của `status`, làm update ghi đè về CREATED. Khai báo lại `status` không default.
export const updateInvoiceSchema = createInvoiceSchema
  .partial()
  .extend({ status: z.enum(INVOICE_STATUS).optional() })

export class UpdateInvoiceDto extends createZodDto(updateInvoiceSchema) {}
