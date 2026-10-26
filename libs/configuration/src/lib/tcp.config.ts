import { ConfigModule, ConfigService } from '@nestjs/config'
import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'

export function TcpProvider(serviceName: TCP_SERVICES): ClientsProviderAsyncOptions {
  return {
    name: serviceName,
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      transport: Transport.TCP,
      options: {
        host: config.get<string>(`${serviceName}_HOST`),
        port: Number(config.get(`${serviceName}_PORT`)),
      },
    }),
  }
}
