var express = require('express')
var fs = require('fs')
var app = express()
const bodyParser = require('body-parser')
var knex = require('./lib/knex')

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

app.post('/upload', (req, res) => {
  let teacher = req.headers['x-teacher']
  let classroom = req.headers['x-classroom']
  // req.pipe(fs.createWriteStream(''))
  // save to db
  // orm
  let code = '' + ((Math.random()*1000000000000)%1000000000)
  code = code.substr(0,3) + '-' + code.substr(3,3) + '-' + code.substr(6,3)
  // 999-999-999
  knex('classroom')
    .insert({
      code,
      name: classroom,
      teacher,
      created_at: knex.fn.now(),
    }, 'id')
    .then((ids) => {
      console.log('ids', ids)
    })
    .then(() => {
      res.send({
        status: true,
        code,
      })
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})