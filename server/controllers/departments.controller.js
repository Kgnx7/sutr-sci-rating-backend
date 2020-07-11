const {
  Department,
  UserStatus,
  User,
  Ria,
  RiaType,
  Position,
  Sequelize,
} = require('../models')
const Op = Sequelize.Op
const groups = require('../utils/constants/accessGroups')
const getDepartment = require('../utils/queries/getDepartment')
const {
  getDepartments,
  getDepartmentsByFaculty,
} = require('../utils/queries/getDepartments')

module.exports = {
  async list(req, res) {
    try {
      const query = req.query
      const limit = parseInt(query.limit)
      const offset = parseInt(query.offset)
      const filter = query.filter

      const { count, rows } = await getDepartments(limit, offset, filter)

      res.status(200).send({ count, departments: rows })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async listByFaculty(req, res) {
    try {
      const { facultyId } = req.params

      const departments = await getDepartmentsByFaculty(facultyId)

      res.status(200).send(departments)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params

      const department = await getDepartment('id', id)

      res.status(200).send(department)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async getRating(req, res) {
    try {
      const { id } = req.params

      const usersStatuses = await UserStatus.findAll({
        where: {
          salaryRate: 1,
          departmentId: id,
        },
        include: [
          {
            model: Position,
            attributes: ['title'],
            as: 'position',
          },
        ],
      })

      const usersIds = usersStatuses.map((status) => status.userId)

      const users = await User.findAll({
        attributes: ['id', 'name', 'surname', 'patronymic'],
        where: {
          id: { [Op.in]: usersIds },
        },
        include: [
          {
            model: Ria,
            attributes: ['title', 'authors', 'description'],
            through: {
              attributes: ['part', 'role'],
            },
            as: 'ria',
            include: [
              {
                model: RiaType,
                attributes: ['perUnit'],
                as: 'riaType',
              },
            ],
          },
        ],
      })

      const consolidatedRegister = users.map((user) => ({
        id: user.id,
        displayName: [user.surname, user.name, user.patronymic]
          .join(' ')
          .trim(),
        sciRating: user.ria.reduce((acc, ria) => {
          return (
            acc + (ria.riaType.perUnit * ria.RiaAuthors.toJSON().part) / 100
          )
        }, 0),
        position: usersStatuses.find((status) => status.userId === user.id)
          .position.title,
      }))

      res.status(200).send(consolidatedRegister)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params

      await Department.update(req.body, {
        where: { id },
      })

      let updatedDepartment = await Department.findByPk(id)

      res.status(200).send(updatedDepartment)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const department = await Department.create(req.body)

      res.status(201).send(department)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      await Department.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Кафедра успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },
}
