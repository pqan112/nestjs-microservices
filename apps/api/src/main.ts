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
import { APP_CONFIG, AppConfig } from './configuration/app/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const appCfg = config.getOrThrow<AppConfig>(APP_CONFIG)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3301,
    },
  })

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = appCfg.port || 3001
  await app.startAllMicroservices()
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
