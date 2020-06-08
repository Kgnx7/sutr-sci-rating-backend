const { User, Department } = require('../../models')

exports.getAllDepartments = async () =>
  Department.findAll({
    include: [
      {
        model: User,
        attributes: ['name', 'surname', 'patronymic'],
        as: 'manager',
      },
    ],
  })

exports.getDepartmentsByFaculty = async (facultyId) =>
  Department.findAll({
    where: { faculty },
    include: [
      {
        model: User,
        attributes: ['name', 'surname', 'patronymic'],
        as: 'manager',
      },
    ],
  })
