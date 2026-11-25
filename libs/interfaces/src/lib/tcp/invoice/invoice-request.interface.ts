import { UpdateInvoiceRequestDto } from '@common/interfaces/gateway/invoice'

export type UpdateInvoiceTcpRequest = UpdateInvoiceRequestDto & { id: string }

export type SendInvoiceTcpRequest = {
  invoiceId: string
  userId: string | null
}
