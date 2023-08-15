import { AccessDeniedError } from '../erros'
import { forbidden } from '../helpers/http/http-helper'
import { AuthMiddleware } from './auth-middleware'

// import { HttpRequest } from '../protocols'

describe('Auth Middleware', () => {
  it('should return 403 if no x-access-token exists in headers', async () => {
    const sut = new AuthMiddleware()
    const HttpResponse = await sut.handle({})
    expect(HttpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
