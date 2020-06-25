const { User, Department, Faculty } = require('../../models')

module.exports = async (key, value) =>
  Department.findOne({
    where: { [key]: value },
    include: [
      {
        model: User,
        attributes: ['name', 'surname', 'patronymic'],
        as: 'manager',
      },
      {
        model: Faculty,
        attributes: ['title', 'short'],
        as: 'faculty',
      },
    ],
  })
