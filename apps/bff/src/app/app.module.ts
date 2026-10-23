import { ExceptionInterceptor } from '@common/interceptors/exception.interceptor'
import { AllExceptionFilter } from '@common/filters/all-exceptions.filter'
import { LoggerMiddleware } from '@common/middlewares/logger.middleware'
import { CustomZodValidationPipe } from '@common/pipes/custom-zod-validation.pipe'
import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { ZodSerializerInterceptor } from 'nestjs-zod'
import { allConfigs } from '../configuration/configuration'
import { envFile, validateEnv } from '../configuration/env.config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientsModule } from '@nestjs/microservices'
import { TCP_SERVICES, TcpProvider } from '@common/configuration/tcp.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate: validateEnv,
      envFilePath: envFile,
      load: allConfigs,
    }),
    ClientsModule.registerAsync([TcpProvider(TCP_SERVICES.INVOICE_SERVICE)]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_PIPE, useClass: CustomZodValidationPipe },
    { provide: APP_FILTER, useClass: AllExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: ExceptionInterceptor },
    { provide: APP_INTERCEPTOR, useClass: ZodSerializerInterceptor },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
