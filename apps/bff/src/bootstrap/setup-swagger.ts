import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { APP_CONFIG, AppConfig } from '../configuration/app/app.config'

export function setupSwagger(
  app: INestApplication,
  config: ConfigService
): void {
  const appConfig = config.getOrThrow<AppConfig>(APP_CONFIG)
  if (appConfig.isDev) return

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Einvoice-bff')
    .setVersion('1.0')
    .addBearerAuth({
      description: 'Default JWT Authorization',
      type: 'http',
      in: 'header',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
    })
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup(`${appConfig.globalPrefix}/docs`, app, document)
}
