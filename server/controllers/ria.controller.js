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
  RiaAuthor,
  Sequelize,
  RiaState,
} = require('../models')
// const castRiaTypeInfo = require('../utils/castRiaTypeInfo')
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

  // async get(req, res) {
  //   try {
  //     const { id } = req.params

  //     const riaType = await Ria.findByPk(id, {
  //       include: [
  //         {
  //           model: RiaGeneralType,
  //           attributes: ['title', 'note'],
  //           as: 'generalType',
  //         },
  //         {
  //           model: RiaSpecification,
  //           as: 'specifications',
  //         },
  //       ],
  //     })

  //     const riaTypeInfo = castRiaTypeInfo(riaType)

  //     res.status(200).send(riaTypeInfo)
  //   } catch (error) {
  //     res.status(400).send({ message: error.message })
  //   }
  // },

  async create(req, res) {
    try {
      const {
        riaMeta,
        authorId,
        properties,
        currentRiaState,
        documents,
      } = req.body

      const ria = await Ria.create(riaMeta)

      // const riaAuthor = await RiaAuthor.create({
      //   userId: authorId,
      //   riaId: ria.id,
      // })

      // const riaState = await RiaState.create({
      //   riaId: ria.id,
      //   stateId: currentRiaState,
      //   userId: authorId,
      // })

      res.status(201).send(ria)
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
