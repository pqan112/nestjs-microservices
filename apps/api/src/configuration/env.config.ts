import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'

export { envFile } from '@common/configuration/base.config'

const configSchema = baseEnvSchema.extend({
  INVOICE_PORT: z.coerce.number().default(8080),
  TCP_INVOICE_SERVICE_HOST: z.string().default('localhost'),
  TCP_INVOICE_SERVICE_PORT: z.coerce.number().default(3200),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
