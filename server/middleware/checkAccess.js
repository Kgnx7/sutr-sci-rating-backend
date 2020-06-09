const defineAbilitiesFor = require('../utils/defineAbilities')
const { AccessGroup, User, Department, Faculty } = require('../models')
const groups = require('../utils/constants/accessGroups')

module.exports = (action, source) => async (req, res, next) => {
  try {
    const user = req.user
    const accessGroup = await AccessGroup.findByPk(user.accessGroupId)
    const ability = await defineAbilitiesFor(user)

    if (accessGroup.title === groups.Admin) {
      return next()
    }

    // if (action === 'get' && source === 'users') {
    //   const user = await User.findByPk(req.params.id)
    //   if (ability.can(action, user)) {
    //     return next()
    //   }
    // }

    if (accessGroup.title === groups.Faculty) {
      if (action === 'listByFaculty' && source === 'departments') {
        const requestedFacultyId = parseInt(req.params.facultyId)
        const userDepartmentId = user.departmentId
        const userDepartment = await Department.findByPk(userDepartmentId)

        if (userDepartment.facultyId === requestedFacultyId) {
          return next()
        } else {
          return res.status(403).json({ message: 'Нет прав' })
        }
      }

      if (action === 'listByDepartment' && source === 'users') {
        const requestedDepartmentId = parseInt(req.params.departmentId)
        const userDepartmentId = user.departmentId
        const userDepartment = await Department.findByPk(userDepartmentId)
        const requestedDepartment = await Department.findByPk(
          requestedDepartmentId
        )

        if (userDepartment.facultyId === requestedDepartment.facultyId) {
          return next()
        } else {
          return res.status(403).json({ message: 'Нет прав' })
        }
      }

      if (action === 'get' && source === 'users') {
        const userId = parseInt(req.params.id)

        if (req.user.id === userId) {
          return next()
        }

        const requestedUser = await User.findByPk(userId)
        const requestedUserDepartmentId = requestedUser.departmentId
        const requestedUserDepartment = await Department.findByPk(
          requestedUserDepartmentId
        )
        const requestedUserFaculty = await Faculty.findByPk(
          requestedUserDepartment.facultyId
        )

        if (req.user.facultyId === requestedUserFaculty.id) {
          return next()
        } else {
          return res.status(403).json({ message: 'Нет прав' })
        }
      }
    }
    if (accessGroup.title === groups.Department) {
    }

    if (
      accessGroup.title === groups.Worker &&
      action === 'get' &&
      source === 'users'
    ) {
      const user = await User.findByPk(req.params.id)

      if (ability.can(action, user)) {
        return next()
      }
    }

    if (ability.can(action, source)) {
      return next()
    } else {
      return res.status(403).json({ message: 'Нет прав' })
    }
  } catch (error) {
    return next(error)
  }
}
