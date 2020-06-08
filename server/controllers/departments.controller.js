const { Department } = require('../models')
const groups = require('../utils/constants/accessGroups')
const getDepartment = require('../utils/queries/getDepartment')
const { getAllDepartments } = require('../utils/queries/getDepartments')

module.exports = {
  async list(req, res) {
    try {
      const departments = await getAllDepartments()

      res.status(200).send(departments)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async listByFaculty(req, res) {
    try {
      const { facultyId } = req.params

      const departments = await Department.findAll({
        where: {
          facultyId: facultyId,
        },
      })

      res.status(200).send(departments)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params

      const department = await Department.findByPk(id)

      res.status(200).send(department)
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
