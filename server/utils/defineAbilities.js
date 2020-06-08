const { AbilityBuilder, Ability } = require('@casl/ability')
const { AccessGroup } = require('../models')
const groups = require('./constants/accessGroups')

module.exports = async (user) => {
  const accessGroup = await AccessGroup.findByPk(user.accessGroupId)
  const { can, rules } = new AbilityBuilder(Ability)

  switch (accessGroup.title) {
    case groups.Admin:
      can('list', 'users')
      can('listByDepartment', 'users')
      can('delete', 'users')
      can('create', 'users')
      can('get', 'users')
      can('edit', 'users')

      can('list', 'positions')
      can('delete', 'positions')
      can('create', 'positions')
      can('edit', 'positions')

      can('list', 'accessGroups')
      can('delete', 'accessGroups')
      can('create', 'accessGroups')
      can('edit', 'accessGroups')

      can('list', 'academicDegrees')
      can('delete', 'academicDegrees')
      can('create', 'academicDegrees')
      can('edit', 'academicDegrees')

      can('list', 'academicRanks')
      can('delete', 'academicRanks')
      can('create', 'academicRanks')
      can('edit', 'academicRanks')

      can('list', 'departments')
      can('listByFaculty', 'departments')
      can('get', 'departments')
      can('delete', 'departments')
      can('create', 'departments')
      can('edit', 'departments')

      can('list', 'faculties')
      can('get', 'faculties')
      can('delete', 'faculties')
      can('create', 'faculties')
      can('edit', 'faculties')

      can('list', 'staffs')
      can('delete', 'staffs')
      can('create', 'staffs')
      can('edit', 'staffs')
      break
    case groups.University:
      break
  }

  return new Ability(rules)
}
