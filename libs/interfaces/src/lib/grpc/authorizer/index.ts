import { AuthorizeResponseWire } from '@common/interfaces/tcp/authorizer/authorizer-response.interface'
import { Observable } from 'rxjs'

export type VerifyUserTokenRequest = {
  token: string
  processId: string
}

export type VerifyUserTokenResponse = {
  code: string
  data?: AuthorizeResponseWire
  error: string
}

export interface AuthorizerService {
  verifyUserToken(params: VerifyUserTokenRequest): Observable<VerifyUserTokenResponse>
}
