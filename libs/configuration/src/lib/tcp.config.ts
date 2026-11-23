import { ConfigModule, ConfigService, registerAs } from '@nestjs/config'
import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'

export const TCP_CONFIG = 'tcp'

export interface TcpConfig {
  host: string
  port: number
}

// {
//   tcp: {
//     TCP_AUTHORIZER_SERVICE: {
//       host: 'localhost',
//       port: 3204,
//     },
//   }
// }
// Dùng: createTcpConfig(getEnv, [TCP_SERVICES.AUTHORIZER_SERVICE])
export function createTcpConfig(getEnv: () => Record<string, unknown>, services: TCP_SERVICES[]) {
  return registerAs(TCP_CONFIG, () => {
    const env = getEnv()
    const result: Record<string, TcpConfig> = {}

    for (const service of services) {
      const host = env[`${service}_HOST`]
      const port = env[`${service}_PORT`]

      // Báo lỗi rõ ràng nếu quên khai báo biến trong env.config.ts
      if (typeof host !== 'string' || typeof port !== 'number') {
        throw new Error(`Missing ${service}_HOST or ${service}_PORT in env.config.ts`)
      }

      result[service] = { host, port }
    }

    return result
  })
}

// Lấy { host, port } của một TCP service từ config đã đăng ký ở trên.
export function getTcpConfig(config: ConfigService, service: TCP_SERVICES): TcpConfig {
  return config.getOrThrow<TcpConfig>(`${TCP_CONFIG}.${service}`)
}

export function TcpProvider(serviceName: TCP_SERVICES): ClientsProviderAsyncOptions {
  return {
    name: serviceName,
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      transport: Transport.TCP,
      options: getTcpConfig(config, serviceName),
    }),
  }
}
