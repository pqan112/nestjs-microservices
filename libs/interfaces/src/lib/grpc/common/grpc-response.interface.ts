import { HTTP_MESSAGE } from '@common/constants/enum/http-message.enum'
import { Serialized } from '../../common/serialized.type'

export type GrpcResponse<T> = {
  code: string
  data?: T
  error: string
}

export const GrpcSuccess = <T>(data?: T): GrpcResponse<Serialized<T>> => ({
  code: HTTP_MESSAGE.OK,
  data: data && JSON.parse(JSON.stringify(data)),
  error: '',
})
