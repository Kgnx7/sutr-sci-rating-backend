const {
  Ria,
  User,
  RiaType,
  RsType,
  RsState,
  RiaStatus,
  Document,
  FundSource,
  RiaSpecification,
  RiaProperty,
  RiaAuthor,
  Sequelize,
  RiaState,
} = require('../models')
const castRiaInfo = require('../utils/castRiaInfo')
const Op = Sequelize.Op

module.exports = {
  async list(req, res) {
    try {
      const query = req.query
      const limit = parseInt(query.limit)
      const offset = parseInt(query.offset)
      const filter = query.filter

      const { count, rows } = await Ria.findAndCountAll({
        limit,
        offset,
        where: {
          [Op.or]: [
            {
              title: { [Op.substring]: filter },
            },
            {
              authors: { [Op.substring]: filter },
            },
            {
              description: { [Op.substring]: filter },
            },
          ],
        },
        include: [
          {
            model: RiaType,
            attributes: ['title'],
            as: 'riaType',
          },
          {
            model: RsType,
            attributes: ['title'],
            as: 'rsType',
          },
          {
            model: RiaStatus,
            attributes: ['title'],
            as: 'riaStatus',
          },
          {
            model: User,
            attributes: ['title'],
            as: 'users',
          },
          {
            model: RsState,
            attributes: ['title'],
            as: 'states',
          },
          {
            model: FundSource,
            attributes: ['title'],
            as: 'fundSources',
          },
          {
            model: Document,
            attributes: ['title'],
            as: 'documents',
          },
        ],
      })

      //const ria = rows.map((row) => castRiaTypeInfo(row))

      res.status(200).send({ count, rows })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params

      const ria = await Ria.findByPk(id, {
        plain: true,
        include: [
          {
            model: RiaType,
            attributes: ['title'],
            as: 'riaType',
          },
          {
            model: RsType,
            attributes: ['title'],
            as: 'rsType',
          },
          {
            model: RiaStatus,
            attributes: ['title'],
            as: 'riaStatus',
          },
          {
            model: User,
            as: 'users',
            through: {
              attributes: ['part', 'role'],
            },
          },
          {
            model: RsState,
            attributes: ['title'],
            as: 'states',
          },
          {
            model: FundSource,
            attributes: ['title'],
            as: 'fundSources',
          },
          {
            model: RiaSpecification,
            attributes: ['title'],
            through: {
              attributes: ['value'],
            },
            as: 'properties',
          },
        ],
      })

      const riaInfo = castRiaInfo(ria.toJSON())

      res.status(200).send(riaInfo)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const { riaMeta, authorMeta } = req.body

      const ria = await Ria.create(riaMeta)

      const riaAuthor = await RiaAuthor.create({
        userId: authorMeta.userId,
        riaId: ria.id,
        part: authorMeta.part,
        role: authorMeta.role,
      })

      res.status(201).send(ria)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async addProperty(req, res) {
    try {
      const riaProperty = await RiaProperty.create(req.body)

      res.status(201).send(riaProperty)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  // async edit(req, res) {
  //   try {
  //     const { id } = req.params

  //     await Ria.update(req.body, {
  //       where: { id },
  //     })

  //     const updatedRiaType = await Ria.findByPk(id)

  //     res.status(200).send(updatedRiaType)
  //   } catch (error) {
  //     res.status(400).send({ message: error.message })
  //   }
  // },

  // async delete(req, res) {
  //   try {
  //     const id = req.params.id

  //     await Ria.destroy({
  //       where: { id },
  //     })

  //     res.status(200).send({ message: 'Запись успешно удалена' })
  //   } catch (error) {
  //     res.status(400).send({ message: error.message })
  //   }
  // },
}
