const { DegreeType } = require('../models')

module.exports = {
  async list(req, res) {
    try {

      const degreeTypes = await DegreeType.findAll()

      res.status(200).send(degreeTypes)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
