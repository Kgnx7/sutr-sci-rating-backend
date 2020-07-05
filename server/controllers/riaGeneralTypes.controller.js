const { RiaGeneralType } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const riaGeneralTypes = await RiaGeneralType.findAll()

      res.status(200).send(riaGeneralTypes)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
