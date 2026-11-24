import { THROTTLER_GROUP } from '@common/constants/enum/throttler-group.enum'
import { THROTTLER_CONFIG, ThrottlerConfig } from '@common/configuration/throttler.config'
import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config'

export default registerAs(THROTTLER_CONFIG, (): ThrottlerConfig => {
  const env = getEnv()
  const ttl = env.THROTTLER_TTL_MS
  const limit = env.THROTTLER_LIMIT

  return {
    ttl,
    limit,
    groups: {
      [THROTTLER_GROUP.AUTHORIZER]: {
        ttl: env.AUTHORIZER_THROTTLER_TTL_MS ?? ttl,
        limit: env.AUTHORIZER_THROTTLER_LIMIT ?? limit,
      },
      [THROTTLER_GROUP.INVOICE]: {
        ttl: env.INVOICE_THROTTLER_TTL_MS ?? ttl,
        limit: env.INVOICE_THROTTLER_LIMIT ?? limit,
      },
      [THROTTLER_GROUP.PRODUCT]: {
        ttl: env.PRODUCT_THROTTLER_TTL_MS ?? ttl,
        limit: env.PRODUCT_THROTTLER_LIMIT ?? limit,
      },
      [THROTTLER_GROUP.USER]: {
        ttl: env.USER_THROTTLER_TTL_MS ?? ttl,
        limit: env.USER_THROTTLER_LIMIT ?? limit,
      },
    },
  }
})
