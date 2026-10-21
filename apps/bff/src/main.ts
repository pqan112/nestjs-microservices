/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { APP_CONFIG, AppConfig } from './configuration/app/app.config'
import { ConfigService } from '@nestjs/config'
import { setupSwagger } from './bootstrap/setup-swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const appCfg = config.getOrThrow<AppConfig>(APP_CONFIG)

  // setup swagger
  setupSwagger(app, config)

  const globalPrefix = appCfg.globalPrefix
  app.setGlobalPrefix(globalPrefix)
  const port = appCfg.port || 3000
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
