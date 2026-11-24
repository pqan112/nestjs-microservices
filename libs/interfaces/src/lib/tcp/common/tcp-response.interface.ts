import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'
import { HttpStatus } from '@nestjs/common'

export type TcpResponse<T = any> = {
  code: string
  data?: T
  error?: string
  statusCode: number
}

export const TcpSuccess = <T>(data?: T): TcpResponse<T> => ({
  code: HTTP_MESSAGE.OK,
  data,
  statusCode: HttpStatus.OK,
})
