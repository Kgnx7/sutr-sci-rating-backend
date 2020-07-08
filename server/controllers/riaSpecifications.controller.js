const { RiaSpecification, Sequelize } = require('../models')
const Op = Sequelize.Op

module.exports = {
  async list(req, res) {
    try {
      const query = req.query
      const limit = parseInt(query.limit)
      const offset = parseInt(query.offset)
      const filter = query.filter

      const { count, rows } = await RiaSpecification.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.or]: [
            {
              title: { [Op.substring]: filter },
            },
            {
              dataType: { [Op.substring]: filter },
            },
          ],
        },
      })

      res.status(200).send({ count, riaSpecifications: rows })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const riaSpecification = await RiaSpecification.create(req.body)

      res.status(201).send(riaSpecification)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id

      await RiaSpecification.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Запись успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
