import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helpers.ts/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default // to ensure it doesn't import any modules that depend on the database before the database is connected
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`),
    )
  })
  .catch(console.error)
