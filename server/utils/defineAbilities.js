const { AbilityBuilder, Ability } = require('@casl/ability')

module.exports = function defineAbilityFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability)

  can('read', 'user')

  // cannot('delete', 'Post', { published: true })

  return build()
}
