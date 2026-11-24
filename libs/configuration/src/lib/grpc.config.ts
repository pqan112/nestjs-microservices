import { ConfigModule, ConfigService, registerAs } from '@nestjs/config'
import { ClientsProviderAsyncOptions, GrpcOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { GRPC_SERVICES } from '@common/constants/enum/grpc-service.enum'
import { Logger } from '@nestjs/common'

export const GRPC_CONFIG = 'grpc'

// Mỗi service khai báo: proto package + file .proto (1 file hoặc mảng nhiều file).
// Webpack copy các file proto vào <dist>/proto (xem webpack.config.js của app).
const GRPC_PROTOS: Record<GRPC_SERVICES, { package: string; protoPath: string | string[] }> = {
  [GRPC_SERVICES.AUTHORIZER_SERVICE]: {
    package: GRPC_SERVICES.AUTHORIZER_SERVICE,
    protoPath: 'authorizer.proto',
  },
  [GRPC_SERVICES.USER_ACCESS_SERVICE]: {
    package: GRPC_SERVICES.USER_ACCESS_SERVICE,
    protoPath: 'user-access.proto',
  },
}

// Dùng: createGrpcConfig(getEnv, [GRPC_SERVICES.AUTHORIZER_SERVICE])
// Env cần: <SERVICE>_HOST, <SERVICE>_PORT
// Kết quả đăng ký: { grpc: { GRPC_AUTHORIZER_SERVICE: { package, protoPath, url } } }
export function createGrpcConfig(getEnv: () => Record<string, unknown>, services: GRPC_SERVICES[]) {
  return registerAs(GRPC_CONFIG, () => {
    const env = getEnv()
    const result: Record<string, GrpcOptions['options']> = {}

    for (const service of services) {
      const host = env[`${service}_HOST`]
      const port = env[`${service}_PORT`]

      // Báo lỗi rõ ràng nếu quên khai báo biến trong env.config.ts
      if (typeof host !== 'string' || typeof port !== 'number') {
        throw new Error(`Missing ${service}_HOST or ${service}_PORT in env.config.ts`)
      }

      const { package: protoPackage, protoPath } = GRPC_PROTOS[service]
      result[service] = {
        package: protoPackage,
        protoPath: Array.isArray(protoPath)
          ? protoPath.map((path) => join(__dirname, 'proto', path))
          : join(__dirname, 'proto', protoPath),
        url: `${host}:${port}`,
      }
    }
    Logger.debug('GRPC_CONFIG', result)
    return result
  })
}

// Lấy options của một gRPC service từ config đã đăng ký ở trên.
export function getGrpcOptions(config: ConfigService, service: GRPC_SERVICES): GrpcOptions {
  return {
    transport: Transport.GRPC,
    options: config.getOrThrow<GrpcOptions['options']>(`${GRPC_CONFIG}.${service}`),
  }
}

// Đăng ký gRPC client;  @Inject(GRPC_SERVICES.X) ở nơi dùng.
// (gRPC server không cần name vì connectMicroservice không dùng token.)
export function GrpcProvider(serviceName: GRPC_SERVICES): ClientsProviderAsyncOptions {
  return {
    name: serviceName,
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => getGrpcOptions(config, serviceName),
  }
}
