import { REDIS_CONFIG, RedisConfig } from '@common/configuration/redis.config'
import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config.js'

export default registerAs(REDIS_CONFIG, (): RedisConfig => {
  const env = getEnv()
  return {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    ttl: env.REDIS_TTL,
  }
})
