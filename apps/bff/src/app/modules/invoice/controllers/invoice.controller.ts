import { ProcessId } from '@common/decorators/processId.decorator'
import { CreateInvoiceRequestDto } from '@common/interfaces/gateway/invoice/invoice-request.dto'
import { Body, Controller, HttpStatus, Inject, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { TCP_SERVICES } from '@common/configuration/tcp.config'
import { INVOICE_PATTERNS } from '@common/constants/tcp-pattern.constant'
import { InvoiceResponseDto } from '@common/interfaces/gateway/invoice/invoice-response.dto'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { CreateInvoiceTcpRequest, InvoiceTcpResponse } from '@common/interfaces/tcp/invoice'
import { ZodResponse } from 'nestjs-zod'
import { firstValueFrom } from 'rxjs'

@ApiTags('Invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(@Inject(TCP_SERVICES.INVOICE_SERVICE) private readonly invoiceClient: TcpClient) {}

  @Post()
  @ZodResponse({ type: ResponseDto<InvoiceResponseDto>, status: HttpStatus.CREATED })
  @ApiOperation({
    summary: 'Create a new invoice',
  })
  async create(@Body() body: CreateInvoiceRequestDto, @ProcessId() processId: string) {
    const response = await firstValueFrom(
      this.invoiceClient.send<InvoiceTcpResponse, CreateInvoiceTcpRequest>(
        INVOICE_PATTERNS.CREATE,
        {
          data: body,
          processId,
        }
      )
    )
    return ResponseDto.create(response)
  }
}
