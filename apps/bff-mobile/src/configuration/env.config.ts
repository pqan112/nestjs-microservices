import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'

export { envFile } from '@common/configuration/base.config'

const configSchema = baseEnvSchema.extend({
  PORT: z.coerce.number().default(8081),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
