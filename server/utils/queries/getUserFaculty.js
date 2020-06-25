const {
  User,
  Position,
  Department,
  AccessGroup,
  AcademicRank,
  EmploymentType,
  UserStatus,
} = require('../../models')

module.exports = async (key, value) => {
  const user = await User.findOne({
    where: { [key]: value },
    include: [
      {
        model: AccessGroup,
        attributes: ['title'],
        as: 'accessGroup',
      },
      {
        model: AcademicRank,
        attributes: ['title'],
        as: 'academicRank',
      },
    ],
  })

  const states = await UserStatus.findAll({
    where: {
      userId: user.id,
    },
    attributes: ['salaryRate'],
    include: [
      {
        model: Position,
        attributes: ['title'],
        as: 'position',
      },
      {
        model: Department,
        attributes: ['title'],
        as: 'department',
      },
      {
        model: EmploymentType,
        attributes: ['title'],
        as: 'employmentType',
      },
    ],
  })

  user.states = states

  return user
}
