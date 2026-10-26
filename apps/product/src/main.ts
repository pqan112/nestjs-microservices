/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// reflect-metadata must load before any decorated class so Nest can read
// the metadata emitted by emitDecoratorMetadata (DI + route reflection).
import 'reflect-metadata'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { ConfigService } from '@nestjs/config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { APP_CONFIG, AppConfig } from './configuration/app/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const appCfg = config.getOrThrow<AppConfig>(APP_CONFIG)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: config.getOrThrow<string>(`${TCP_SERVICES.PRODUCT_SERVICE}_HOST`),
      port: config.getOrThrow<number>(`${TCP_SERVICES.PRODUCT_SERVICE}_PORT`),
    },
  })
  const globalPrefix = appCfg.globalPrefix
  app.setGlobalPrefix(globalPrefix)
  const port = appCfg.port || 3002
  await app.startAllMicroservices()
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
  app.enableShutdownHooks()
}

bootstrap()
