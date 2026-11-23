import z from 'zod'
import { baseEnvSchema, defineEnv } from '@common/configuration/base.config'
import { mongoEnvSchema } from '@common/configuration/mongo.config'

const configSchema = baseEnvSchema.extend(mongoEnvSchema.shape).extend({
  USER_ACCESS_PORT: z.coerce.number().default(3003),
  // Service này lắng nghe TCP
  TCP_USER_ACCESS_SERVICE_HOST: z.string().default('localhost'),
  TCP_USER_ACCESS_SERVICE_PORT: z.coerce.number(),
  // Service này gọi authorizer qua TCP
  TCP_AUTHORIZER_SERVICE_HOST: z.string().default('localhost'),
  TCP_AUTHORIZER_SERVICE_PORT: z.coerce.number(),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
