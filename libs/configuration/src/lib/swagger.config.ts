import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { APP_CONFIG, AppConfig } from './app.config'

// Chỉ bật Swagger ở môi trường dev. Gọi sau `app.setGlobalPrefix` để đường dẫn có prefix.
export function setupSwagger(app: INestApplication, title: string): void {
  const appConfig = app.get(ConfigService).getOrThrow<AppConfig>(APP_CONFIG)
  if (!appConfig.isDev) return

  const swaggerConfig = new DocumentBuilder()
    .setTitle(title)
    .setVersion('1.0')
    .addBearerAuth({
      description: 'Default JWT Authorization',
      type: 'http',
      in: 'header',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
    })
    .addSecurityRequirements('bearer')
    .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup(`${appConfig.globalPrefix}/docs`, app, document)
}
