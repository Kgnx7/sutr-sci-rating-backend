const defineAbilitiesFor = require('../utils/defineAbilities')

module.exports = (action, source) => (req, res, next) => {
  try {
    const user = req.user
    const ability = defineAbilitiesFor(user)

    if (ability.can(action, source)) {
      return next()
    } else {
      return res.status(403).json({ message: 'Нет прав' })
    }
  } catch (error) {
    return next(error)
  }
}
