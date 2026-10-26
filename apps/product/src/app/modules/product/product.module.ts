import { TypeOrmProvider } from '@common/configuration/typeorm.config'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from '@common/entities/product.entity'
import { ProductController } from './controllers/product.controller'
import { ProductService } from './services/product.service'
import { ProductRepo } from './repos/product.repo'

@Module({
  imports: [TypeOrmProvider, TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepo],
})
export class ProductModule {}
