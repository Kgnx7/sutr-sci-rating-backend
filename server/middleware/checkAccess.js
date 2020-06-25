const defineAbilitiesFor = require('../utils/defineAbilities')
const { Faculty } = require('../models')
const groups = require('../utils/constants/accessGroups')

module.exports = (action, source) => async (req, res, next) => {
  try {
    const user = req.user
    const accessGroup = user.accessGroup && user.accessGroup.title
    const ability = await defineAbilitiesFor(user)

    if (accessGroup === groups.Admin) {
      return next()
    }

    return ability.can(action, source)
      ? next()
      : res.status(403).json({ message: 'Нет прав' })
  } catch (error) {
    return next(error)
  }
}
