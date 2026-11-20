import { AUTH_TYPE_KEY, AuthType, AuthTypeType } from '@common/constants/auth.constant'
import { applyDecorators, SetMetadata } from '@nestjs/common'
import { ApiBearerAuth } from '@nestjs/swagger'

export const Auth = (authType: AuthTypeType = AuthType.Bearer) => {
  const metadata = SetMetadata(AUTH_TYPE_KEY, authType)

  if (authType === AuthType.None) {
    return metadata
  }
  return applyDecorators(ApiBearerAuth(), metadata)
}

export const Public = () => {
  return Auth(AuthType.None)
}
