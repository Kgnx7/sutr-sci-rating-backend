const { AbilityBuilder, Ability } = require('@casl/ability')
const { AccessGroup } = require('../models')
const groups = require('./constants/accessGroups')

module.exports = async (user) => {
  const accessGroup = await AccessGroup.findByPk(user.accessGroupId)
  const { can, cannot, rules } = new AbilityBuilder(Ability)

  switch (accessGroup.title) {
    case groups.Admin:
      can('list', 'User')
      can('listByDepartment', 'User')
      can('get', 'User')
      can('create', 'User')
      can('edit', 'User')
      can('delete', 'User')
      can('create', 'UserStatus')

      can('list', 'Faculty')
      can('get', 'Faculty')
      can('create', 'Faculty')
      can('edit', 'Faculty')
      can('delete', 'Faculty')

      can('list', 'Department')
      can('listByFaculty', 'Department')
      can('get', 'Department')
      can('create', 'Department')
      can('edit', 'Department')
      can('delete', 'Department')

      can('list', 'AccessGroup')

      can('list', 'DegreeType')

      can('create', 'AcademicDegree')
      can('delete', 'AcademicDegree')

      can('list', 'RiaType')
      break
    case groups.ResearchDepartment:
      can('list', 'User')
      can('listByDepartment', 'User')
      can('get', 'User')
      can('create', 'User')
      can('edit', 'User')
      can('delete', 'User')
      can('create', 'UserStatus')

      can('list', 'Faculty')
      can('get', 'Faculty')
      can('create', 'Faculty')
      can('edit', 'Faculty')
      can('delete', 'Faculty')

      can('list', 'Department')
      can('listByFaculty', 'Department')
      can('get', 'Department')
      can('create', 'Department')
      can('edit', 'Department')
      can('delete', 'Department')

      can('list', 'DegreeType')

      can('create', 'AcademicDegree')
      can('delete', 'AcademicDegree')
      break
    case groups.University:
      can('list', 'User')
      can('listByDepartment', 'User')
      can('get', 'User')

      can('list', 'Faculty')
      can('get', 'Faculty')

      can('list', 'Department')
      can('listByFaculty', 'Department')
      can('get', 'Department')

      can('list', 'DegreeType')

      break
    case groups.Faculty:
      can('list', 'User')
      can('listByDepartment', 'User')
      can('get', 'User')

      can('list', 'Faculty')
      can('get', 'Faculty')

      can('list', 'Department')
      can('listByFaculty', 'Department')
      can('get', 'Department')

      can('list', 'DegreeType')

      break
    case groups.Department:
      can('list', 'User')
      can('listByDepartment', 'User')
      can('get', 'User')

      can('list', 'Faculty')
      can('get', 'Faculty')

      can('list', 'Department')
      can('listByFaculty', 'Department')
      can('get', 'Department')

      can('list', 'DegreeType')

      break
    case groups.Worker:
      can('get', 'User')
      can('listByDepartment', 'User')
      can('list', 'User')

      can('list', 'Faculty')
      can('get', 'Faculty')

      can('list', 'Department')
      can('listByFaculty', 'Department')
      can('get', 'Department')

      can('list', 'DegreeType')

      break
    default:
      break
  }

  return new Ability(rules)
}
