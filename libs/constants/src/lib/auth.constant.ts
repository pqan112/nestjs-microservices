export const AUTH_TYPE_KEY = 'authType'

export const AuthType = {
  Bearer: 'Bearer',
  None: 'None',
} as const

export type AuthTypeType = (typeof AuthType)[keyof typeof AuthType]
