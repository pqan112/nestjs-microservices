import { parseToken } from './string.util'
import { MetadataKeys } from '@common/constants/common.constant'
import { AuthorizeResponseWire } from '@common/interfaces/tcp/authorizer'

export function getAccessToken(req: any, keepBearer = false): string {
  const token = req.headers?.['authorization']

  return keepBearer ? token : parseToken(token)
}

export function setUserData(req: any, userData?: AuthorizeResponseWire): void {
  req[MetadataKeys.USER_DATA] = userData
}
