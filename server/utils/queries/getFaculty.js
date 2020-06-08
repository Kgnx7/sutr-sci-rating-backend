const { User, Faculty } = require('../../models')

module.exports = async (key, value) =>
  Faculty.findOne({
    where: { [key]: value },
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
