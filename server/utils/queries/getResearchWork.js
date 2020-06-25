const { Rid, User } = require('../../models')
const { Sequelize } = require('../../models')
const Op = Sequelize.Op

module.exports = async (key, value) =>
  Rid.findOne({
    where: { [key]: value },
    include: [
      {
        model: User,
        attributes: ['login'],
        // through: {
        //   attributes: [],
        // },
        as: 'author',
      },
    ],
  })
