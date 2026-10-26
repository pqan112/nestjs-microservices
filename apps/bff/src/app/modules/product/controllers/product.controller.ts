import { TCP_REQUEST_MESSSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { ProcessId } from '@common/decorators/processId.decorator'
import { CreateProductRequestDto, ProductResponseDto } from '@common/interfaces/gateway/product'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { CreateProductTcpRequest, ProductTcpResponse } from '@common/interfaces/tcp/product'
import { Body, Controller, Get, HttpStatus, Inject, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZodResponse } from 'nestjs-zod'
import { firstValueFrom } from 'rxjs'

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
    const result = await firstValueFrom(
      this.productClient.send<ProductTcpResponse, CreateProductTcpRequest>(
        TCP_REQUEST_MESSSAGE.PRODUCT.CREATE,
        {
          data: body,
          processId,
        }
      )
    )
    return ResponseDto.create(result)
  }

  @Get()
  @ZodResponse({ type: ResponseDto<ProductResponseDto[]> })
  @ApiOperation({ summary: 'Get list products' })
  async getList(@ProcessId() processId: string) {
    const result = await firstValueFrom(
      this.productClient.send<ProductTcpResponse[]>(TCP_REQUEST_MESSSAGE.PRODUCT.GET_LIST, {
        processId,
      })
    )
    return ResponseDto.create(result)
  }
}
