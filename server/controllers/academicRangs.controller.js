const { AcademicRank } = require('../models')
const { editReq } = require('../utils/dataSchemas/common')

module.exports = {
  async list(req, res) {
    try {
      const academicRangs = await AcademicRank.findAll()

      res.status(200).send(academicRangs)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const isReqBodyCorrect = await editReq.isValid(req.body)

      if (!isReqBodyCorrect) {
        throw new Error('Некорректный запрос')
      }

      const { id, data } = req.body

      await AcademicDegree.update(data, {
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
      const academicRangs = await AcademicRank.create(req.body)

      res.status(201).send(academicRangs)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
