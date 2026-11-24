import { createConfigModule } from '@common/configuration/base.config'
import { AllExceptionFilter } from '@common/filters/all-exceptions.filter'
import { ExceptionInterceptor } from '@common/interceptors/exception.interceptor'
import { LoggerMiddleware } from '@common/middlewares/logger.middleware'
import { CustomZodValidationPipe } from '@common/pipes/custom-zod-validation.pipe'
import { MiddlewareConsumer, Module } from '@nestjs/common'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ThrottlerGuard } from '@nestjs/throttler'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { allConfigs } from '../configuration/configuration'
import { validateEnv } from '../configuration/env.config'
import { AuthorizerModule } from './modules/authorizer/authorizer.module'
import { InvoiceModule } from './modules/invoice/invoice.module'
import { ProductModule } from './modules/product/product.module'
import { UserModule } from './modules/user/user.module'
import { UserGuard } from '@common/guards/user.guard'
import { ClientsModule } from '@nestjs/microservices'
import { RedisProvider } from '@common/configuration/redis.config'
import { ThrottlerProvider } from '@common/configuration/throttler.config'
import { GrpcProvider } from '@common/configuration/grpc.config'
import { GRPC_SERVICES } from '@common/constants/enum/grpc-service.enum'
import { PermissionGuard } from '@common/guards/permission.guard'

@Module({
  imports: [
    createConfigModule(validateEnv, allConfigs),
    AuthorizerModule,
    InvoiceModule,
    ProductModule,
    UserModule,
    // UserGuard requires gRPC connection to Authorizer service
    ClientsModule.registerAsync([GrpcProvider(GRPC_SERVICES.AUTHORIZER_SERVICE)]),
    RedisProvider,
    ThrottlerProvider,
  ],
  controllers: [],
  providers: [
    // Guards chạy theo thứ tự khai báo: giới hạn request trước khi gọi authorizer xác thực
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: UserGuard },
    { provide: APP_GUARD, useClass: PermissionGuard },
    { provide: APP_PIPE, useClass: CustomZodValidationPipe },
    { provide: APP_INTERCEPTOR, useClass: ExceptionInterceptor },
    { provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor },
    { provide: APP_FILTER, useClass: AllExceptionFilter },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
