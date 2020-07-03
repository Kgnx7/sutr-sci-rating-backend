const { User, Department, Faculty } = require('../../models')
const { Sequelize } = require('../../models')
const Op = Sequelize.Op

exports.getDepartmentsByFaculty = async (facultyId) => {
  const filter = {}

  if (facultyId !== undefined) {
    filter.facultyId = facultyId
  }

  return Department.findAll({
    where: filter,
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
}

exports.getDepartments = async (limit, offset, filter) => {
  return Department.findAndCountAll({
    limit,
    offset,
    where: {
      [Op.or]: [
        {
          title: { [Op.substring]: filter },
        },
        {
          short: { [Op.substring]: filter },
        },
      ],
    },
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
}
