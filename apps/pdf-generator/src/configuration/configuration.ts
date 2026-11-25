import { createAppConfig } from '@common/configuration/app.config'
import { createTcpConfig } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { getEnv } from './env.config'

export const allConfigs = [
  createAppConfig(getEnv, (env) => env.PDF_GENERATOR_PORT),
  createTcpConfig(getEnv, [TCP_SERVICES.PDF_GENERATOR_SERVICE]),
]
