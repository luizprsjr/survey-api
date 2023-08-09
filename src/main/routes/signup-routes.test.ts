import request from 'supertest'

import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helpers.ts/mongo-helper'
import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  it('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Luiz',
        email: 'lpiresjunior@gmail.com',
        password: '123',
        passwordConfirmation: '123',
      })
      .expect(200)
  })
})