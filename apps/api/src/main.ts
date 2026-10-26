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
      host: config.getOrThrow<string>(`${TCP_SERVICES.INVOICE_SERVICE}_HOST`),
      port: config.getOrThrow<number>(`${TCP_SERVICES.INVOICE_SERVICE}_PORT`),
    },
  })
  const globalPrefix = appCfg.globalPrefix
  app.setGlobalPrefix(globalPrefix)
  const port = appCfg.port || 3001
  await app.startAllMicroservices()
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
  app.enableShutdownHooks()
}

bootstrap()
