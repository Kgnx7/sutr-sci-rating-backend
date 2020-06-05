const { Position } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const positions = await Position.findAll()

      res.status(200).send(positions)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const position = await Position.create(req.body)

      res.status(201).send(position)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params

      await Position.update(req.body, {
        where: { id },
      })

      const updatedPosition = await Position.findByPk(id)

      res.status(200).send(updatedPosition)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id

      await Position.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Должность успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
