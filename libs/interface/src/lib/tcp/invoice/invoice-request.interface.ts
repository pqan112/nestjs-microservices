import { UpdateInvoiceRequestDto } from '@common/interfaces/gateway/invoice'

export type UpdateInvoiceTcpRequest = UpdateInvoiceRequestDto & { id: string }
