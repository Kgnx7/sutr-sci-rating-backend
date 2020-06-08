const { Faculty, User } = require('../models')
const groups = require('../utils/constants/accessGroups')
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

  async create(req, res) {
    try {
      const data = req.body

      const deanLogin = data.dean
      const assistantDeanLogin = data.assistantDean

      const dean = await User.findOne({
        attributes: ['id'],
        where: {
          login: deanLogin,
        },
      })

      const assistantDean = await User.findOne({
        attributes: ['id'],
        where: {
          login: assistantDeanLogin,
        },
      })

      delete data.dean
      delete data.assistantDean

      data.deanId = dean.id
      data.assistantDeanId = assistantDean.id

      const faculty = await Faculty.create(data)

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
