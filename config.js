module.exports = {
  db: 'dbtest1',

  dbtest1: {
    driver: 'mysql',
    param: {
      host: 'localhost',
      port: 3306,
      user: 'sc',
      password: 'sc123',
      database: 'smartclassroom',
      supportBigNumber: true,
      timezone: '+7:00',
      dateString: true,
      charset: 'utf8mb4_unicode_ci',
    },
  },
  dbtest2: {
    driver: 'mysql',
    param: {
      host: 'localhost',
      port: 3306,
      user: 'sc',
      password: 'sc123',
      database: 'smartclassroom',
      supportBigNumber: true,
      timezone: '+7:00',
      dateString: true,
      charset: 'utf8mb4_unicode_ci',
    },
  },
  dbtest3: {
    driver: 'mysql',
    param: {
      host: 'localhost',
      port: 3306,
      user: 'sc',
      password: 'sc123',
      database: 'smartclassroom',
      supportBigNumber: true,
      timezone: '+7:00',
      dateString: true,
      charset: 'utf8mb4_unicode_ci',
    },
  },

  mssql: {
    driver: 'mssql',
    param: {
      server: 'SAK-MI\\SQL2016DEV',
      port: 1433,
      user: 'frs',
      password: 'frs123',
      database: 'IFRS',
    },
  },
}
