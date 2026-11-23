import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'
import { typeOrmEnvSchema } from '@common/configuration/typeorm.config'

const configSchema = baseEnvSchema.extend(typeOrmEnvSchema.shape).extend({
  PRODUCT_PORT: z.coerce.number().default(3002),
  // Service này lắng nghe TCP
  TCP_PRODUCT_SERVICE_HOST: z.string().default('localhost'),
  TCP_PRODUCT_SERVICE_PORT: z.coerce.number(),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
