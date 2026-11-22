import { parseToken } from './string.util'
import { MetadataKeys } from '@common/constants/common.constant'
import { AuthorizeResponseDto } from '@common/interfaces/tcp/authorizer'

export function getAccessToken(req: any, keepBearer = false): string {
  const token = req.headers?.['authorization']

  return keepBearer ? token : parseToken(token)
}

export function setUserData(req: any, userData?: AuthorizeResponseDto): void {
  req[MetadataKeys.USER_DATA] = userData
}
