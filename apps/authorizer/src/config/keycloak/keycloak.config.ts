import { registerAs } from '@nestjs/config'
import { getEnv } from '../env.config.js'

export const KEYCLOAK_CONFIG = 'keycloak'

export interface KeycloakConfig {
  host: string
  realm: string
  clientId: string
  clientSecret: string
}

export default registerAs(KEYCLOAK_CONFIG, (): KeycloakConfig => {
  const env = getEnv()
  return {
    host: env.KEYCLOAK_HOST,
    realm: env.KEYCLOAK_REALM,
    clientId: env.KEYCLOAK_CLIENT_ID,
    clientSecret: env.KEYCLOAK_CLIENT_SECRET,
  }
})
