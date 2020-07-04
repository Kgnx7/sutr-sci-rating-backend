require('dotenv').config()

module.exports = {
  development: {
    username: 'root',
    password: 'toor',
    database: 'sutr_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  test: {
    username: 'root',
    password: 'toor',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
}
