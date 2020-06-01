const passport = require('passport')
const { User } = require('../models')
const collectUserInfo = require('../utils/queries/collectUserInfo')

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

      res.json(user)
    })
  })(req, res)
}

exports.logout = (req, res) => {
  req.logout()
  res.end()
}

exports.getUser = async (req, res) => {
  try {
    const userId = req.session.passport.user

    const user = await User.findByPk(userId)

    const userInfo = await collectUserInfo(user)

    res.json(userInfo)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}
