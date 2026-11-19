import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config.js'

export const APP_CONFIG = 'app'

export interface AppConfig {
  port: number
  globalPrefix: string
  isDev: boolean
}

export default registerAs(APP_CONFIG, (): AppConfig => {
  const env = getEnv()
  return {
    port: env.PORT,
    globalPrefix: env.GLOBAL_PREFIX,
    isDev: env.IS_DEV,
  }
})
