import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { ProcessId } from '@common/decorators/process-id.decorator'
import { MobileProductResponseDto, ProductResponseDto } from '@common/interfaces/gateway/product'
import { ResponseDto } from '@common/interfaces/gateway/response.dto'
import { sendTcpRequest } from '@common/interfaces/tcp/common/send-tcp-request'
import { TcpClient } from '@common/interfaces/tcp/common/tcp-client.interface'
import { Controller, Get, Inject } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZodResponse } from 'nestjs-zod'

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(@Inject(TCP_SERVICES.PRODUCT_SERVICE) private readonly productClient: TcpClient) {}

  @Get()
  @ZodResponse({ type: ResponseDto<MobileProductResponseDto[]> })
  @ApiOperation({ summary: 'Get list products (mobile: without description)' })
  async getList(@ProcessId() processId: string) {
    const response = await sendTcpRequest<ProductResponseDto[]>(
      this.productClient,
      TCP_REQUEST_MESSAGE.PRODUCT.GET_LIST,
      processId
    )

    // ResponseDto.data is z.any(), so the field must be dropped explicitly here.
    return ResponseDto.create({
      ...response,
      data: response.data.map(({ description: _description, ...product }) => product),
    })
  }
}
