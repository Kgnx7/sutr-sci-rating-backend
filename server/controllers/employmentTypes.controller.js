const { EmploymentType } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const EmploymentTypes = await EmploymentType.findAll()

      res.status(200).send(EmploymentTypes)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params

      await EmploymentType.update(req.body, {
        where: { id },
      })

      const updatedEmploymentType = await EmploymentType.findByPk(id)

      res.status(200).send(updatedEmploymentType)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const employmentType = await EmploymentType.create(req.body)

      res.status(201).send(employmentType)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      await EmploymentType.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Запись успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
