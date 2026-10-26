import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { ProcessId } from '@common/decorators/processId.decorator'
import {
  CreateInvoiceRequestDto,
  InvoiceResponseDto,
  UpdateInvoiceRequestDto,
} from '@common/interfaces/gateway/invoice'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import {
  CreateInvoiceTcpRequest,
  InvoiceTcpResponse,
  UpdateInvoiceTcpRequest,
} from '@common/interfaces/tcp/invoice'
import { Body, Controller, Get, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
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
    const result = await firstValueFrom(
      this.invoiceClient.send<InvoiceTcpResponse, CreateInvoiceTcpRequest>(
        TCP_REQUEST_MESSAGE.INVOICE.CREATE,
        {
          data: body,
          processId,
        }
      )
    )
    return ResponseDto.create(result)
  }

  @Get()
  @ZodResponse({ type: ResponseDto<InvoiceResponseDto[]> })
  @ApiOperation({ summary: 'Get list invoices' })
  async getList(@ProcessId() processId: string) {
    const result = await firstValueFrom(
      this.invoiceClient.send<InvoiceTcpResponse[]>(TCP_REQUEST_MESSAGE.INVOICE.GET_LIST, {
        processId,
      })
    )
    return ResponseDto.create(result)
  }

  @Patch(':id')
  @ZodResponse({ type: ResponseDto<InvoiceResponseDto> })
  @ApiOperation({ summary: 'Update an invoice' })
  async update(
    @Param('id') id: string,
    @Body() body: UpdateInvoiceRequestDto,
    @ProcessId() processId: string
  ) {
    const result = await firstValueFrom(
      this.invoiceClient.send<InvoiceTcpResponse, UpdateInvoiceTcpRequest>(
        TCP_REQUEST_MESSAGE.INVOICE.UPDATE,
        {
          data: { id, ...body },
          processId,
        }
      )
    )
    return ResponseDto.create(result)
  }
}
