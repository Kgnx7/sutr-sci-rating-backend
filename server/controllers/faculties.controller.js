const {
  Faculty,
  User,
  Department,
  UserStatus,
  Ria,
  RiaType,
  Position,
  Sequelize,
} = require('../models')
const Op = Sequelize.Op
const getFaculty = require('../utils/queries/getFaculty')
const getFaculties = require('../utils/queries/getFaculties')

module.exports = {
  async list(req, res) {
    try {
      const faculties = await getFaculties()

      res.status(200).send(faculties)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params

      const faculty = await getFaculty('id', id)

      res.status(200).send(faculty)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },

  async getRating(req, res) {
    try {
      const { id } = req.params

      const departmentsIds = await Department.findAll({
        where: {
          facultyId: id,
        },
      }).map((department) => department.id)

      const usersStatuses = await UserStatus.findAll({
        where: {
          salaryRate: 1,
          departmentId: { [Op.in]: departmentsIds },
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

  async create(req, res) {
    try {
      const faculty = await Faculty.create(req.body)

      res.status(201).send(faculty)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      await Faculty.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Факультет успешно удален' })
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params

      await Faculty.update(req.body, {
        where: { id },
      })

      const updatedFaculty = await Faculty.findByPk(id)

      res.status(200).send(updatedFaculty)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
