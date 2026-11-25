import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'
import { mongoEnvSchema } from '@common/configuration/mongo.config'

const configSchema = baseEnvSchema.extend(mongoEnvSchema.shape).extend({
  INVOICE_PORT: z.coerce.number().default(3001),
  // Service này lắng nghe TCP
  TCP_INVOICE_SERVICE_HOST: z.string().default('localhost'),
  TCP_INVOICE_SERVICE_PORT: z.coerce.number(),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
