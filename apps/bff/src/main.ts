import 'reflect-metadata'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { APP_CONFIG, AppConfig } from '@common/configuration/app.config'
import { setupSwagger } from '@common/configuration/swagger.config'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule)
    const config = app.get(ConfigService)
    const appCfg = config.getOrThrow<AppConfig>(APP_CONFIG)

    const globalPrefix = appCfg.globalPrefix
    app.setGlobalPrefix(globalPrefix)

    // swagger must run after setGlobalPrefix so documented paths include the prefix
    setupSwagger(app, 'Einvoice-bff')

    // close Redis/TCP connections cleanly when the process receives a stop signal
    app.enableShutdownHooks()

    const port = appCfg.port
    await app.listen(port)
    Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
    Logger.log(
      `🚀 Application Document is running on: http://localhost:${port}/${globalPrefix}/docs`
    )
  } catch (error) {
    Logger.error(`❌ Application failed to start: ${error}`, '', 'Bootstrap', false)
    // exit with an error code so Docker/CI know the app failed to start
    process.exit(1)
  }
}

bootstrap()
