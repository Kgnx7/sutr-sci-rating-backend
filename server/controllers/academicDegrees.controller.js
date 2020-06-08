const { AcademicDegree } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const academicDegrees = await AcademicDegree.findAll()

      res.status(200).send(academicDegrees)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id

      await AcademicDegree.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Запись успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const id = req.params.id

      await AcademicDegree.update(req.body, {
        where: { id },
      })

      const updatedAcademicDegree = await AcademicDegree.findByPk(id)

      res.status(200).send(updatedAcademicDegree)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const academicDegrees = await AcademicDegree.create(req.body)

      res.status(201).send(academicDegrees)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
