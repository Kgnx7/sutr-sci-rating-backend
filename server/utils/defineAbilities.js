const { AbilityBuilder, Ability } = require('@casl/ability')
const { AccessGroup } = require('../models')
const groups = require('./constants/accessGroups')

module.exports = async (user) => {
  const accessGroup = await AccessGroup.findByPk(user.accessGroupId)
  const { can, cannot, rules } = new AbilityBuilder(Ability)

  switch (accessGroup.title) {
    case groups.Admin:
      can('list', 'users')
      can('listByDepartment', 'users')
      can('get', 'User')

      can('list', 'faculties')
      can('get', 'Faculty')

      can('list', 'faculties')
      can('get', 'Faculty')

      can('list', 'departments')
      can('get', 'Department')

      break
    case groups.ResearchDepartment:
      can('list', 'users')
      can('listByDepartment', 'users')
      can('get', 'User')

      can('list', 'faculties')
      can('get', 'Faculty')

      can('list', 'departments')
      can('get', 'Department')

      break
    case groups.University:
      can('list', 'users')
      can('listByDepartment', 'users')
      can('get', 'User')

      can('list', 'faculties')
      can('get', 'Faculty')

      can('list', 'departments')
      can('get', 'Department')

      break
    case groups.Faculty:
      can('list', 'users')
      can('listByDepartment', 'users')
      can('get', 'User')

      can('get', 'Faculty')
      can('get', 'Faculty')

      can('list', 'departments')
      can('get', 'Department')

      break
    case groups.Department:
      can('list', 'users')
      can('listByDepartment', 'users')
      can('get', 'User')

      can('list', 'faculties')
      can('get', 'Faculty')

      can('list', 'departments')
      can('get', 'Department')

      break
    case groups.Worker:
      can('get', 'User')
      can('listByDepartment', 'users')
      can('list', 'users')

      can('list', 'faculties')
      can('get', 'Faculty')

      can('list', 'departments')
      can('get', 'Department')
      break
  }

  return new Ability(rules)
}
