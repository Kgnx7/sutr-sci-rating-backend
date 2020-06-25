const { AcademicRank } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const academicRanks = await AcademicRank.findAll()

      res.status(200).send(academicRanks)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params

      await AcademicDegree.update(req.body, {
        where: { id },
      })

      const updatedAcademicRang = await AcademicRank.findByPk(id)

      res.status(200).send(updatedAcademicRang)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const academicRanks = await AcademicRank.create(req.body)

      res.status(201).send(academicRanks)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      await AcademicRank.destroy({
        where: { id },
      })

      res.status(201).send({ message: 'Запись успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
