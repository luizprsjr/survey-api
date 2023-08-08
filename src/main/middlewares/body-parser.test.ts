import request from 'supertest'

import app from '../config/app'

describe('Body Parser Middleware', () => {
  it('should parse body as json', async () => {
    app.post('/test_post_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_post_parser')
      .send({ name: 'Luiz' })
      .expect({ name: 'Luiz' })
  })
})
