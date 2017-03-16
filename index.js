var express = require('express')
var app = express()
const bodyParser = require('body-parser')

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.post('/login', bodyParser.json(), (req, res) => {
  console.log(req.body)
  res.send({
    status: true,
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})