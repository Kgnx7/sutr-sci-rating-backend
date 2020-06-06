const defineAbilitiesFor = require('../utils/defineAbilities')
const { AccessGroup } = require('../models')
const groups = require('../utils/groups')

module.exports = (action, source) => async (req, res, next) => {
  try {
    const user = req.user
    const accessGroup = await AccessGroup.findByPk(user.accessGroupId)
    const ability = await defineAbilitiesFor(user)

    // if (accessGroup === groups.Admin) {
    //   return next();
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
