var express = require('express')
var fs = require('fs')
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
app.post('/upload', (req, res) => {
  console.log(req.headers)
  req.pipe(fs.createWriteStream(req.headers['x-code'] + ".jpg", {
    flags: 'w',
    encoding: null,
    fd: null,
    mode: 0666
  }));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})