import { createAppConfig } from '@common/configuration/app.config'
import { createTcpConfig } from '@common/configuration/tcp.config'
import { TCP_SERVICES } from '@common/constants/enum/tcp-service.enum'
import { createGrpcConfig } from '@common/configuration/grpc.config'
import { GRPC_SERVICES } from '@common/constants/enum/grpc-service.enum'
import { getEnv } from './env.config'
import keycloakConfig from './keycloak/keycloak.config'

export const allConfigs = [
  createAppConfig(getEnv, (env) => env.AUTHORIZER_PORT),
  createTcpConfig(getEnv, [TCP_SERVICES.AUTHORIZER_SERVICE, TCP_SERVICES.USER_ACCESS_SERVICE]),
  createGrpcConfig(getEnv, [GRPC_SERVICES.AUTHORIZER_SERVICE, GRPC_SERVICES.USER_ACCESS_SERVICE]),
  keycloakConfig,
]
