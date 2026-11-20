import { Controller, UseInterceptors } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { TCP_REQUEST_MESSAGE } from '@common/constants/enum/tcp-request-message.enum'
import { TcpLoggingInterceptor } from '@common/interceptors/tcp-logging.interceptor'
import { RequestParams } from '@common/decorators/request-param.decorator'
import { ProductTcpResponse } from '@common/interfaces/tcp/product'
import { CreateProductRequestDto } from '@common/interfaces/gateway/product'
import { TCPResponseDto } from '@common/interfaces/tcp/common/response.dto'
import { ProductService } from '../services/product.service'

@Controller()
@UseInterceptors(TcpLoggingInterceptor)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern(TCP_REQUEST_MESSAGE.PRODUCT.CREATE)
  async create(
    @RequestParams() body: CreateProductRequestDto
  ): Promise<TCPResponseDto<ProductTcpResponse>> {
    const result = await this.productService.create(body)
    return TCPResponseDto.success<ProductTcpResponse>(result)
  }

  @MessagePattern(TCP_REQUEST_MESSAGE.PRODUCT.GET_LIST)
  async getList(): Promise<TCPResponseDto<ProductTcpResponse[]>> {
    const result = await this.productService.getList()
    return TCPResponseDto.success<ProductTcpResponse[]>(result)
  }
}
