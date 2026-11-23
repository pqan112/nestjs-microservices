import { THROTTLER_CONFIG, ThrottlerConfig } from '@common/configuration/throttler.config'
import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config'

export default registerAs(THROTTLER_CONFIG, (): ThrottlerConfig => {
  const env = getEnv()
  return {
    ttl: env.THROTTLER_TTL_MS,
    limit: env.THROTTLER_LIMIT,
  }
})
