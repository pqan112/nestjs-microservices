import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'

export type GrpcResponse<T> = {
  code: string
  data?: T
  error: string
}

export const GrpcSuccess = <T>(data?: T): GrpcResponse<T> => ({
  code: HTTP_MESSAGE.OK,
  data,
  error: '',
})
