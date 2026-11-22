import { v7 } from 'uuid'
import { UnauthorizedException } from '@nestjs/common'
import { ERROR_CODE } from '@common/constants/enum/error-code.enum'

export const getProcessId = (prefix?: string) => {
  return prefix ? `${prefix}-${v7()}` : v7()
}

export function parseToken(token: string): string {
  if (!token?.trim()) {
    throw new UnauthorizedException(ERROR_CODE.AUTH_TOKEN_REQUIRED)
  }

  const [scheme, value] = token.trim().split(/\s+/)
  if (scheme.toLowerCase() !== 'bearer' || !value) {
    throw new UnauthorizedException(ERROR_CODE.AUTH_TOKEN_INVALID_FORMAT)
  }
  return value
}
