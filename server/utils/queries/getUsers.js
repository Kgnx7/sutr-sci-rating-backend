const { User, AccessGroup, AcademicRank } = require('../../models')
const { Sequelize } = require('../../models')
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
