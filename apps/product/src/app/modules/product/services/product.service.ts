import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateProductTcpRequest } from '@common/interfaces/tcp/product'
import { ProductRepo } from '../repos/product.repo'

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepo) {}

  async create(data: CreateProductTcpRequest) {
    const { sku, name } = data

    const exists = await this.productRepo.exists(sku, name)
    if (exists) {
      throw new BadRequestException('Product already exists')
    }

    return this.productRepo.create(data)
  }

  getList() {
    return this.productRepo.findAll()
  }
}
