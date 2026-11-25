import { Injectable } from '@nestjs/common'
import path from 'path'
import type { Invoice } from '@common/schemas/invoice.schema'
import { PdfService } from '../../pdf/services/pdf.service'

@Injectable()
export class InvoicePdfService {
  constructor(private readonly pdfService: PdfService) {}

  generateInvoicePdf(invoice: Invoice) {
    const templatePath = path.join(__dirname, 'templates', 'invoice.template.ejs')
    const subtotal = invoice.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)

    return this.pdfService.generatePdfFromEjs(templatePath, {
      client: invoice.client,
      status: invoice.status,
      items: invoice.items,
      vatAmount: invoice.vatAmount,
      totalAmount: invoice.totalAmount,
      subtotal,
    })
  }
}
