const defineAbilitiesFor = require('../utils/defineAbilities')
const { AccessGroup, User } = require('../models')
const groups = require('../utils/constants/accessGroups')

module.exports = (action, source) => async (req, res, next) => {
  try {
    const user = req.user
    const accessGroup = await AccessGroup.findByPk(user.accessGroupId)
    const ability = await defineAbilitiesFor(user)

    // if (action === 'get' && source === 'users') {
    //   const user = await User.findByPk(req.params.id)
    //   if (ability.can(action, user)) {
    //     return next()
    //   }
    // }

    if (accessGroup === groups.Admin) {
      return next()
    }

    // if (accessGroup === groups.University && ability.can(action, source)) {
    //   return next()
    // }

    // if (source === 'faculties') {

    // }

    if (ability.can(action, source)) {
      return next()
    } else {
      return res.status(403).json({ message: 'Нет прав' })
    }
  } catch (error) {
    return next(error)
  }
}
