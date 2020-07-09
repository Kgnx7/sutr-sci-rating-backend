const { RsType, Sequelize } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const rsTypes = await RsType.findAll()

      res.status(200).send(rsTypes)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },
}
