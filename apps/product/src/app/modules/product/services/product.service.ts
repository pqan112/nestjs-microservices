import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateProductRequestDto } from '@common/interfaces/gateway/product'
import { ProductRepo } from '../repos/product.repo'
import { ERROR_CODE } from '@common/constants/enum/error-code.enum'

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepo) {}

  async create(data: CreateProductRequestDto) {
    const { sku, name } = data

    const exists = await this.productRepo.exists(sku, name)
    if (exists) {
      throw new BadRequestException(ERROR_CODE.PRODUCT_ALREADY_EXISTS)
    }

    return this.productRepo.create(data)
  }

  getList() {
    return this.productRepo.findAll()
  }
}
