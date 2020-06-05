const passport = require('passport')
const { User } = require('../models')
const castUserInfo = require('../utils/castUserInfo')

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      return res.status(401).json(info)
    }

    req.login(user, async (err) => {
      if (err) {
        return next(err)
      }

      const userInfo = castUserInfo(user)

      res.json(userInfo)
    })
  })(req, res)
}

exports.logout = (req, res) => {
  req.logout()
  res.end()
}
