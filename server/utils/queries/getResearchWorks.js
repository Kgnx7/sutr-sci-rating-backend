const { Rid } = require('../../models')
const { Sequelize } = require('../../models')
const Op = Sequelize.Op

module.exports = async (limit, offset, filter) =>
  Rid.findAndCountAll({
    limit,
    offset,
    where: {
      [Op.or]: [
        {
          title: { [Op.substring]: filter },
        },
      ],
    },
    include: [],
  })
