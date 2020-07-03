const { AcademicDegree } = require('../models')

module.exports = {
  async create(req, res) {
    try {
      const academicDegrees = await AcademicDegree.create(req.body)

      res.status(201).send(academicDegrees)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      await AcademicDegree.destroy({
        where: { id },
      })

      res.status(201).send({ message: 'Запись успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
