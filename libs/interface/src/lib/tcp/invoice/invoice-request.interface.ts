import {
  CreateInvoiceRequestDto,
  UpdateInvoiceRequestDto,
} from '@common/interfaces/gateway/invoice'

export type CreateInvoiceTcpRequest = CreateInvoiceRequestDto

export type UpdateInvoiceTcpRequest = UpdateInvoiceRequestDto & { id: string }
