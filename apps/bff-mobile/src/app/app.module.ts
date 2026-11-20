import { TcpProvider } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { AllExceptionFilter } from '@common/filters/all-exceptions.filter'
import { UserGuard } from '@common/guards/user.guard'
import { ExceptionInterceptor } from '@common/interceptors/exception.interceptor'
import { LoggerMiddleware } from '@common/middlewares/logger.middleware'
import { CustomZodValidationPipe } from '@common/pipes/custom-zod-validation.pipe'
import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ClientsModule } from '@nestjs/microservices'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { allConfigs } from '../configuration/configuration'
import { envFile, validateEnv } from '../configuration/env.config'
import { ProductModule } from './modules/product/product.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
    ProductModule,
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
