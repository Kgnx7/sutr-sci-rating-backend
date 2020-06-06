const {
  User,
  Position,
  Department,
  AccessGroup,
  AcademicDegree,
  AcademicRank,
  Staff,
} = require('../../models')
const { sequelize, Sequelize } = require('../../models')
const Op = Sequelize.Op

module.exports = async (limit, offset, filter) =>
  User.findAndCountAll({
    limit,
    offset,
    where: {
      [Op.or]: [
        {
          login: { [Op.substring]: filter },
        },
        {
          name: { [Op.substring]: filter },
        },
        {
          surname: { [Op.substring]: filter },
        },
      ],
    },
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
