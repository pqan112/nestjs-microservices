import 'reflect-metadata'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { ConfigService } from '@nestjs/config'
import { getTcpConfig } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { APP_CONFIG, AppConfig } from '@common/configuration/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const appCfg = config.getOrThrow<AppConfig>(APP_CONFIG)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: getTcpConfig(config, TCP_SERVICES.PRODUCT_SERVICE),
  })
  const globalPrefix = appCfg.globalPrefix
  app.setGlobalPrefix(globalPrefix)
  // close connections cleanly when the process receives a stop signal
  app.enableShutdownHooks()
  const port = appCfg.port
  await app.startAllMicroservices()
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
