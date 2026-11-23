import { createAppConfig } from '@common/configuration/app.config'
import { createTcpConfig } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { getEnv } from './env.config'
import redisConfig from './redis/redis.config'
import throttlerConfig from './throttler/throttler.config'

export const allConfigs = [
  createAppConfig(getEnv, (env) => env.BFF_PORT),
  createTcpConfig(getEnv, [
    TCP_SERVICES.INVOICE_SERVICE,
    TCP_SERVICES.PRODUCT_SERVICE,
    TCP_SERVICES.USER_ACCESS_SERVICE,
    TCP_SERVICES.AUTHORIZER_SERVICE,
  ]),
  redisConfig,
  throttlerConfig,
]
