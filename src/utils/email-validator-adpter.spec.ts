import validator from 'validator'
import isEmail from 'validator/lib/isEmail'

import { EmailValidatorAdapter } from './email-validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  },
}))

describe('EmailValidator Adapter', () => {
  it('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  it('should return true if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(true)
  })
})
