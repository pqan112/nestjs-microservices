import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'
import { redisEnvSchema } from '@common/configuration/redis.config'

export { envFile } from '@common/configuration/base.config'

const configSchema = baseEnvSchema.extend({
  PORT: z.coerce.number().default(8080),
  TCP_INVOICE_SERVICE_HOST: z.string().default('localhost'),
  TCP_INVOICE_SERVICE_PORT: z.coerce.number().default(3200),
  ...redisEnvSchema.shape,
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
