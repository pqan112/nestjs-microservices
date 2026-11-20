import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { ProcessId } from '@common/decorators/process-id.decorator'
import {
  CreateInvoiceRequestDto,
  InvoiceResponseDto,
  UpdateInvoiceRequestDto,
} from '@common/interfaces/gateway/invoice'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { sendTcpRequest } from '@common/interfaces/tcp/common/send-tcp-request'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { UpdateInvoiceTcpRequest } from '@common/interfaces/tcp/invoice'
import { Body, Controller, Get, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZodResponse } from 'nestjs-zod'

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
    return sendTcpRequest<InvoiceResponseDto, CreateInvoiceRequestDto>(
      this.invoiceClient,
      TCP_REQUEST_MESSAGE.INVOICE.CREATE,
      processId,
      body
    )
  }

  @Get()
  @ZodResponse({ type: ResponseDto<InvoiceResponseDto[]> })
  @ApiOperation({ summary: 'Get list invoices' })
  async getList(@ProcessId() processId: string) {
    return sendTcpRequest<InvoiceResponseDto[]>(
      this.invoiceClient,
      TCP_REQUEST_MESSAGE.INVOICE.GET_LIST,
      processId
    )
  }

  @Patch(':id')
  @ZodResponse({ type: ResponseDto<InvoiceResponseDto> })
  @ApiOperation({ summary: 'Update an invoice' })
  async update(
    @Param('id') id: string,
    @Body() body: UpdateInvoiceRequestDto,
    @ProcessId() processId: string
  ) {
    return sendTcpRequest<InvoiceResponseDto, UpdateInvoiceTcpRequest>(
      this.invoiceClient,
      TCP_REQUEST_MESSAGE.INVOICE.UPDATE,
      processId,
      { id, ...body }
    )
  }
}
