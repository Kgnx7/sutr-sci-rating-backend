const { User, Department, Faculty } = require('../../models')

exports.getDepartments = async (facultyId) => {
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
