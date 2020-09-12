const express = require('express')
const app = express()
const cors = require('cors')

//OPEN Cross-Origin Resource Sharing
app.use(cors())

//SETUP ROUTES
require('./startup/routes')(app)

var port = 8082

app.listen(port, function () {
  console.log('listening on ' + port)
})
