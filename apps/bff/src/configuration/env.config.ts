import z from 'zod'
import {
  baseEnvSchema,
  defineEnv,
} from '@nestjs-template/configuration/base.config'

export { envFile } from '@nestjs-template/configuration/base.config'

const configSchema = baseEnvSchema.extend({
  PORT: z.coerce.number().default(8080),
})

export type Env = z.infer<typeof configSchema>

export const { validateEnv, getEnv } = defineEnv(configSchema)
