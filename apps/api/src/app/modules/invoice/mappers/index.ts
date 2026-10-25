import { CreateInvoiceTcpRequest } from '@common/interfaces/tcp/invoice'
import { CreateInvoice } from '@common/schemas/invoice.schema'

export const invoiceRequestMapping = (
  data: CreateInvoiceTcpRequest
): Omit<CreateInvoice, 'status'> => ({
  ...data,
  totalAmount: data.items.reduce((total, item) => total + item.total, 0),
  vatAmount: data.items.reduce(
    (total, item) => total + item.unitPrice * item.quantity * (item.vatRate / 100),
    0
  ),
})
