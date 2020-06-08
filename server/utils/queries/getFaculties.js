const { User, Faculty } = require('../../models')

module.exports = async () =>
  Faculty.findAll({
    include: [
      {
        model: User,
        attributes: ['name', 'surname', 'patronymic'],
        as: 'dean',
      },
      {
        model: User,
        attributes: ['name', 'surname', 'patronymic'],
        as: 'assistantDean',
      },
    ],
  })
