import { Validation } from '../../../../presentation/protocols'
import {
  RequiredFieldValidation,
  ValidationComposite,
} from '../../../../validation/validators'
import { makeAddSurveyValidation } from './add-survey-validation-factory'

jest.mock('../../../../validation/validators/validation-composite.ts')

describe('AddSurveyValidation Factory', () => {
  it('should call ValidationComposite with all validations', () => {
    makeAddSurveyValidation()
    const validations: Validation[] = []
    for (const field of ['question', 'answers']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
