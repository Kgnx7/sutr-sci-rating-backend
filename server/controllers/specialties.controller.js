const { Sequelize, Specialty } = require('../models')
const Op = Sequelize.Op

module.exports = {
  async list(req, res) {
    try {
      const query = req.query
      const limit = parseInt(query.limit)
      const offset = parseInt(query.offset)
      const filter = query.filter

      const { count, rows } = await Specialty.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.or]: [
            {
              title: { [Op.substring]: filter },
            },
            {
              code: { [Op.substring]: filter },
            },
          ],
        },
      })

      res.status(200).send({ count, specialties: rows })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  // async create(req, res) {
  //   try {
  //     const position = await Specialty.create(req.body)

  //     res.status(201).send(position)
  //   } catch (error) {
  //     res.status(400).send({ message: error.message })
  //   }
  // },

  // async edit(req, res) {
  //   try {
  //     const { id } = req.params

  //     await Specialty.update(req.body, {
  //       where: { id },
  //     })

  //     const updatedSpecialty = await Specialty.findByPk(id)

  //     res.status(200).send(updatedSpecialty)
  //   } catch (error) {
  //     res.status(400).send({ message: error.message })
  //   }
  // },

  // async delete(req, res) {
  //   try {
  //     const id = req.params.id

  //     await Specialty.destroy({
  //       where: { id },
  //     })

  //     res.status(200).send({ message: 'Должность успешно удалена' })
  //   } catch (error) {
  //     res.status(400).send({ message: error.message })
  //   }
  // },
}
