import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'

const configSchema = baseEnvSchema.extend({
  AUTHORIZER_PORT: z.coerce.number().default(3004),
  // Service này lắng nghe TCP
  TCP_AUTHORIZER_SERVICE_HOST: z.string().default('localhost'),
  TCP_AUTHORIZER_SERVICE_PORT: z.coerce.number(),
  // Service này gọi user-access qua TCP
  TCP_USER_ACCESS_SERVICE_HOST: z.string().default('localhost'),
  TCP_USER_ACCESS_SERVICE_PORT: z.coerce.number(),
  // Service này lắng nghe gRPC
  GRPC_AUTHORIZER_SERVICE_HOST: z.string().default('localhost'),
  GRPC_AUTHORIZER_SERVICE_PORT: z.coerce.number().default(5100),
  KEYCLOAK_HOST: z.string().min(1),
  KEYCLOAK_REALM: z.string().min(1),
  KEYCLOAK_CLIENT_ID: z.string().min(1),
  KEYCLOAK_CLIENT_SECRET: z.string().min(1),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
