const { AccessGroup } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const accessGroups = await AccessGroup.findAll()

      res.status(200).send(accessGroups)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const { id, data } = req.body

      await AccessGroup.update(data, {
        where: { id },
      })

      const updatedAccessGroups = await AccessGroup.findByPk(id)

      res.status(200).send(updatedAccessGroups)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const accessGroups = await AccessGroup.create(req.body)

      res.status(201).send(accessGroups)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const id = req.query.id

      await AccessGroup.destroy({ where: id })

      res.status(200).send({ message: 'Группа доступа успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
