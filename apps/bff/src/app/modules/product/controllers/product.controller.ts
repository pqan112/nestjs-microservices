import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { ProcessId } from '@common/decorators/process-id.decorator'
import { CreateProductRequestDto, ProductResponseDto } from '@common/interfaces/gateway/product'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { sendTcpRequest } from '@common/interfaces/tcp/common/send-tcp-request'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { Body, Controller, Get, HttpStatus, Inject, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZodResponse } from 'nestjs-zod'

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(@Inject(TCP_SERVICES.PRODUCT_SERVICE) private readonly productClient: TcpClient) {}

  @Post()
  @ZodResponse({ type: ResponseDto<ProductResponseDto>, status: HttpStatus.CREATED })
  @ApiOperation({
    summary: 'Create a new product',
  })
  async create(@Body() body: CreateProductRequestDto, @ProcessId() processId: string) {
    return sendTcpRequest<ProductResponseDto, CreateProductRequestDto>(
      this.productClient,
      TCP_REQUEST_MESSAGE.PRODUCT.CREATE,
      processId,
      body
    )
  }

  @Get()
  @ZodResponse({ type: ResponseDto<ProductResponseDto[]> })
  @ApiOperation({ summary: 'Get list products' })
  async getList(@ProcessId() processId: string) {
    return sendTcpRequest<ProductResponseDto[]>(
      this.productClient,
      TCP_REQUEST_MESSAGE.PRODUCT.GET_LIST,
      processId
    )
  }
}
