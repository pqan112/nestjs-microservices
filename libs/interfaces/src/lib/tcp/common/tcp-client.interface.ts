import { Observable } from 'rxjs'
import { TCPRequestDto } from './request.dto'
import { TCPResponseDto } from './response.dto'

export interface TcpClient {
  send<TResult = any, TInput = any>(
    pattern: any,
    data: TCPRequestDto<TInput>
  ): Observable<TCPResponseDto<TResult>>
  emit<TResult = any, TInput = any>(
    pattern: any,
    data: TCPRequestDto<TInput>
  ): Observable<TCPResponseDto<TResult>>
}
