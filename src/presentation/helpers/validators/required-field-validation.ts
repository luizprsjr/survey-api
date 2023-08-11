import { MissingParamError } from '../../erros'
import { Validation } from './validation'

export class RequiredFieldValidation implements Validation {
  // eslint-disable-next-line no-useless-constructor
  constructor(private fieldName: string) {}

  validate(input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
