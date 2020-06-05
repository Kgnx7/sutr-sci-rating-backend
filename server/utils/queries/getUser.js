const {
  User,
  Position,
  Department,
  AccessGroup,
  AcademicDegree,
  AcademicRank,
  Staff,
} = require('../../models')

module.exports = async (key, value) =>
  User.findOne({
    where: { [key]: value },
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
        model: AccessGroup,
        attributes: ['title'],
        as: 'accessGroup',
      },
      {
        model: AcademicDegree,
        attributes: ['title'],
        as: 'academicDegree',
      },
      {
        model: AcademicRank,
        attributes: ['title'],
        as: 'academicRank',
      },
      {
        model: Staff,
        attributes: ['title'],
        as: 'staff',
      },
    ],
  })
