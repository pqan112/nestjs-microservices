import { ConfigModule, ConfigService } from '@nestjs/config'
import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices'

export enum TCP_SERVICES {
  INVOICE_SERVICE = 'TCP_INVOICE_SERVICE',
}

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
