import MockDate from 'mockdate'

import { ok } from '../../../../presentation/helpers/http/http-helper'
import { LoadSurveys, SurveyModel } from './load-surveys-controller-protocols'
import { LoadSurveysController } from './load-surveys.controller'

const makeFakeSurveys = (): SurveyModel[] => {
  return [
    {
      id: 'any_id',
      question: 'any_question',
      answers: [
        {
          image: 'any_image',
          answer: 'any_answer',
        },
      ],
      date: new Date(),
    },
    {
      id: 'other_id',
      question: 'other_question',
      answers: [
        {
          image: 'other_image',
          answer: 'other_answer',
        },
      ],
      date: new Date(),
    },
  ]
}

const makeLoadSurveys = (): LoadSurveys => {
  class LoasSurveysStub implements LoadSurveys {
    async load(): Promise<SurveyModel[]> {
      return new Promise((resolve) => resolve(makeFakeSurveys()))
    }
  }

  return new LoasSurveysStub()
}

interface SutTypes {
  sut: LoadSurveysController
  loadSurveysStub: LoadSurveys
}

const makeSut = (): SutTypes => {
  const loadSurveysStub = makeLoadSurveys()
  const sut = new LoadSurveysController(loadSurveysStub)

  return { sut, loadSurveysStub }
}

describe('LoadSurveys Controller', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  it('should call LoadSurveys', async () => {
    const { sut, loadSurveysStub } = makeSut()
    const loadSpy = jest.spyOn(loadSurveysStub, 'load')
    await sut.handle({})
    expect(loadSpy).toHaveBeenCalled()
  })

  it('should 200 on success', async () => {
    const { sut } = makeSut()
    const HttpResponse = await sut.handle({})
    expect(HttpResponse).toEqual(ok(makeFakeSurveys()))
  })
})
