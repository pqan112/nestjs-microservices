import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'

const configSchema = baseEnvSchema.extend({
  BFF_MOBILE_PORT: z.coerce.number().default(8081),
  // Các service mà bff-mobile gọi qua TCP
  TCP_PRODUCT_SERVICE_HOST: z.string().default('localhost'),
  TCP_PRODUCT_SERVICE_PORT: z.coerce.number(),
  TCP_AUTHORIZER_SERVICE_HOST: z.string().default('localhost'),
  TCP_AUTHORIZER_SERVICE_PORT: z.coerce.number(),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
