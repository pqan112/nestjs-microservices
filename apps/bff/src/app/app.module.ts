import { AllExceptionFilter } from '@common/filters/all-exceptions.filter'
import { ExceptionInterceptor } from '@common/interceptors/exception.interceptor'
import { LoggerMiddleware } from '@common/middlewares/logger.middleware'
import { CustomZodValidationPipe } from '@common/pipes/custom-zod-validation.pipe'
import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { allConfigs } from '../configuration/configuration'
import { envFile, validateEnv } from '../configuration/env.config'
import { AuthorizerModule } from './modules/authorizer/authorizer.module'
import { InvoiceModule } from './modules/invoice/invoice.module'
import { ProductModule } from './modules/product/product.module'
import { UserModule } from './modules/user/user.module'
import { UserGuard } from '@common/guards/user.guard'
import { ClientsModule } from '@nestjs/microservices'
import { TcpProvider } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
    AuthorizerModule,
    InvoiceModule,
    ProductModule,
    UserModule,
    // UserGuard requires TCP connection to Authorizer service
    ClientsModule.registerAsync([TcpProvider(TCP_SERVICES.AUTHORIZER_SERVICE)]),
  ],
  controllers: [],
  providers: [
    { provide: APP_GUARD, useClass: UserGuard },
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
