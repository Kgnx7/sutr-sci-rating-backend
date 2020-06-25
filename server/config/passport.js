const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const db = require('../models')
const getUser = require('../utils/queries/getUser')

const { sequelize, Sequelize, User } = db

passport.use(
  new LocalStrategy(
    { usernameField: 'login', passwordField: 'password' },
    async (login, password, done) => {
      try {
        const user = await getUser('login', login)

        if (!user) {
          return done(null, false, { message: 'Неверный логин' })
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Неверный пароль' })
        }

        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await getUser('id', id)

    done(null, user)
  } catch (error) {
    done(error)
  }
})

module.exports = passport
