const { RiaType, RiaGeneralType, Sequelize } = require('../models')
const Op = Sequelize.Op

module.exports = {
  async list(req, res) {
    try {
      const query = req.query
      const limit = parseInt(query.limit)
      const offset = parseInt(query.offset)
      const filter = query.filter

      const { count, rows } = await RiaType.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.or]: [
            {
              title: { [Op.substring]: filter },
            },
            {
              unit: { [Op.substring]: filter },
            },
          ],
        },
        include: [
          {
            model: RiaGeneralType,
            attributes: ['title', 'note'],
            as: 'generalType',
          },
        ],
      })

      res.status(200).send({ count, riaTypes: rows })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const riaType = await RiaType.create(req.body)

      res.status(201).send(riaType)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const { id } = req.params

      await RiaType.update(req.body, {
        where: { id },
      })

      const updatedRiaType = await RiaType.findByPk(id)

      res.status(200).send(updatedRiaType)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id

      await RiaType.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Запись успешно удалена' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
