import { THROTTLER_GROUP } from '@common/constants/enum/throttler-group.enum'
import { ThrottleGroup } from '@common/configuration/throttler.config'
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
import { SendInvoiceTcpRequest, UpdateInvoiceTcpRequest } from '@common/interfaces/tcp/invoice'
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZodResponse } from 'nestjs-zod'
import { UserData } from '@common/decorators/user-data.decorator'
import { AuthorizedMetadataDto } from '@common/interfaces/tcp/authorizer'
import { Permissions } from '@common/decorators/permission.decorator'
import { PERMISSION } from '@common/constants/enum/role.enum'

@ApiTags('Invoice')
@ThrottleGroup(THROTTLER_GROUP.INVOICE)
@Controller('invoice')
export class InvoiceController {
  private readonly logger = new Logger(InvoiceController.name)

  constructor(@Inject(TCP_SERVICES.INVOICE_SERVICE) private readonly invoiceClient: TcpClient) {}

  @Post()
  @ZodResponse({ type: ResponseDto<InvoiceResponseDto>, status: HttpStatus.CREATED })
  @ApiOperation({
    summary: 'Create a new invoice',
  })
  @Permissions([PERMISSION.INVOICE_CREATE, PERMISSION.INVOICE_GET_BY_ID])
  create(
    @Body() body: CreateInvoiceRequestDto,
    @ProcessId() processId: string,
    @UserData() userData: AuthorizedMetadataDto
  ) {
    this.logger.debug('User data: ', userData)
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

  @Post(':id/send')
  @ZodResponse({ type: ResponseDto<string> })
  @ApiOperation({ summary: 'Send invoice by id' })
  @Permissions([PERMISSION.INVOICE_SEND])
  send(
    @Param('id') id: string,
    @ProcessId() processId: string,
    @UserData() userData: AuthorizedMetadataDto
  ) {
    return sendTcpRequest<string, SendInvoiceTcpRequest>(
      this.invoiceClient,
      TCP_REQUEST_MESSAGE.INVOICE.SEND,
      processId,
      { invoiceId: id, userId: userData.userId }
    )
  }
}
