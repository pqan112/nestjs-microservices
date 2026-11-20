import { createZodDto } from 'nestjs-zod'
import z from 'zod'
import { INVOICE_STATUS } from '@common/constants/enum/invoice.enum'
import { baseEntityResponseSchema } from '../common/base-entity-response.dto'

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

export const updateInvoiceRequestSchema = z.object({
  client: clientRequestSchema.optional(),
  status: z.enum(INVOICE_STATUS).optional(),
})

export class ClientRequestDto extends createZodDto(clientRequestSchema) {}

export class ItemRequestDto extends createZodDto(itemRequestSchema) {}

export class CreateInvoiceRequestDto extends createZodDto(createInvoiceRequestSchema) {}

export class UpdateInvoiceRequestDto extends createZodDto(updateInvoiceRequestSchema) {}

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

export class InvoiceResponseDto extends createZodDto(invoiceResponseSchema) {}
