const { RiaStatus, Sequelize } = require('../models')

module.exports = {
  async list(req, res) {
    try {
      const riaStatuses = await RiaStatus.findAll()

      res.status(200).send(riaStatuses)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },
}
