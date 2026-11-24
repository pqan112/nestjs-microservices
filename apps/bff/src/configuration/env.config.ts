import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'
import { redisEnvSchema } from '@common/configuration/redis.config'
import { throttlerEnvSchema } from '@common/configuration/throttler.config'

// Giới hạn riêng của từng module; bỏ trống thì dùng THROTTLER_TTL_MS / THROTTLER_LIMIT.
const optionalPositiveInt = z.coerce.number().int().positive().optional()

const configSchema = baseEnvSchema
  .extend(redisEnvSchema.shape)
  .extend(throttlerEnvSchema.shape)
  .extend({
    AUTHORIZER_THROTTLER_TTL_MS: optionalPositiveInt,
    AUTHORIZER_THROTTLER_LIMIT: optionalPositiveInt,
    INVOICE_THROTTLER_TTL_MS: optionalPositiveInt,
    INVOICE_THROTTLER_LIMIT: optionalPositiveInt,
    PRODUCT_THROTTLER_TTL_MS: optionalPositiveInt,
    PRODUCT_THROTTLER_LIMIT: optionalPositiveInt,
    USER_THROTTLER_TTL_MS: optionalPositiveInt,
    USER_THROTTLER_LIMIT: optionalPositiveInt,
  })
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
    // Các service mà bff gọi qua gRPC
    GRPC_AUTHORIZER_SERVICE_HOST: z.string().default('localhost'),
    GRPC_AUTHORIZER_SERVICE_PORT: z.coerce.number().default(5100),
  })

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
