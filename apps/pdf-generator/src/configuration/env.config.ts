import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'

const configSchema = baseEnvSchema.extend({
  PDF_GENERATOR_PORT: z.coerce.number().default(3005),
  // Service này lắng nghe TCP
  TCP_PDF_GENERATOR_SERVICE_HOST: z.string().default('localhost'),
  TCP_PDF_GENERATOR_SERVICE_PORT: z.coerce.number(),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
