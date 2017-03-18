'use strict'

const config = require('../config')

const db = config[config.db]
if (!db || !db.driver) {
  throw new Error('ERR_NO_DB_DEFINED')
}

module.exports = require('knex')({
  client: db.driver,
  connection: db.param,
  debug: !process.env.DOCKER,
  pool: {
    min: 0,
    max: 10,
  },
})
