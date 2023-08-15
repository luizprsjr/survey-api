import { AddSurveyRepository } from '../../../../data/usecases/add-survey/db-add-survey-protocols'
import { AddSurveyModel } from '../../../../domain/usecases/add-survey'
import { MongoHelper } from '../helpers/mongo-helpers.ts/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository {
  async add(surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }
}
