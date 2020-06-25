const { Specialty } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const positions = await Specialty.findAll()

      res.status(200).send(positions)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const position = await Specialty.create(req.body)

      res.status(201).send(position)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params

      await Specialty.update(req.body, {
        where: { id },
      })

      const updatedSpecialty = await Specialty.findByPk(id)

      res.status(200).send(updatedSpecialty)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id

      await Specialty.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Должность успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
