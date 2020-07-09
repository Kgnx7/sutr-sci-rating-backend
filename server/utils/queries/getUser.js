const {
  User,
  Position,
  Department,
  AccessGroup,
  AcademicRank,
  EmploymentType,
  UserStatus,
  Specialty,
  DegreeType,
  Ria,
  AcademicDegree,
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
      {
        model: Ria,
        // attributes: ['title'],
        as: 'ria',
      },
    ],
  })

  let states = {}
  let academicDegrees = {}

  if (user) {
    states = await UserStatus.findAll({
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

    academicDegrees = await AcademicDegree.findAll({
      where: {
        userId: user.id,
      },
      include: [
        {
          model: Specialty,
          attributes: ['title'],
          as: 'specialty',
        },
        {
          model: DegreeType,
          attributes: ['title'],
          as: 'degreeType',
        },
      ],
    })
  }

  user.states = states
  user.academicDegrees = academicDegrees

  return user
}
