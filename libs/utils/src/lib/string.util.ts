import { v7 } from 'uuid'
import { UnauthorizedException } from '@nestjs/common'

export const getProcessId = (prefix?: string) => {
  return prefix ? `${prefix}-${v7()}` : v7()
}

export function parseToken(token: string): string {
  if (!token?.trim()) {
    throw new UnauthorizedException('Token is required')
  }

  const [scheme, value] = token.trim().split(/\s+/)
  if (scheme.toLowerCase() !== 'bearer' || !value) {
    throw new UnauthorizedException('Token must be in the format: Bearer <token>')
  }
  return value
}
