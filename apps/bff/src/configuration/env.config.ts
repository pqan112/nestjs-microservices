import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'
import { redisEnvSchema } from '@common/configuration/redis.config'
import { throttlerEnvSchema } from '@common/configuration/throttler.config'

const configSchema = baseEnvSchema
  .extend(redisEnvSchema.shape)
  .extend(throttlerEnvSchema.shape)
  .extend({
    BFF_PORT: z.coerce.number().default(8080),
    // Các service mà bff gọi qua TCP
    TCP_INVOICE_SERVICE_HOST: z.string().default('localhost'),
    TCP_INVOICE_SERVICE_PORT: z.coerce.number(),
    TCP_PRODUCT_SERVICE_HOST: z.string().default('localhost'),
    TCP_PRODUCT_SERVICE_PORT: z.coerce.number(),
    TCP_USER_ACCESS_SERVICE_HOST: z.string().default('localhost'),
    TCP_USER_ACCESS_SERVICE_PORT: z.coerce.number(),
    TCP_AUTHORIZER_SERVICE_HOST: z.string().default('localhost'),
    TCP_AUTHORIZER_SERVICE_PORT: z.coerce.number(),
  })

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
