import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'
import { mongoEnvSchema } from '@common/configuration/mongo.config'

export { envFile } from '@common/configuration/base.config'

const configSchema = baseEnvSchema.extend(mongoEnvSchema.shape).extend({
  USER_ACCESS_PORT: z.coerce.number().default(3003),
  TCP_USER_ACCESS_SERVICE_HOST: z.string().default('localhost'),
  TCP_USER_ACCESS_SERVICE_PORT: z.coerce.number().default(3200),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
