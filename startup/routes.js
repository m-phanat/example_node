const bodyParser = require('body-parser')
const sampleRouter = require('../routes/sample-router')

module.exports = function (app) {
  app.use(bodyParser.json({ limit: '500mb' }))
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))
  app.use('/', sampleRouter)
}
