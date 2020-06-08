const { User } = require('../models')
const { sequelize, Sequelize } = require('../models')
const Op = Sequelize.Op
const groups = require('../utils/constants/accessGroups')
const castUserInfo = require('../utils/castUserInfo')
const getUser = require('../utils/queries/getUser')
const getUsers = require('../utils/queries/getUsers')

module.exports = {
  async create(req, res) {
    try {
      const user = await User.create(req.body)

      const userInfo = castUserInfo(user)

      res.status(201).send(userInfo)
    } catch (error) {
      res.status(400).send({ message: error })
    }
  },

  async edit(req, res) {
    try {
      const id = req.params.id

      await User.update(req.body, {
        where: { id },
      })

      let updatedUser = await User.findByPk(id)

      const userInfo = castUserInfo(updatedUser)

      res.status(200).send(userInfo)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async list(req, res) {
    try {
      const query = req.query
      const limit = parseInt(query.limit)
      const offset = parseInt(query.offset)
      const filter = query.filter

      const { count, rows } = await getUsers(limit, offset, filter)

      const users = rows.map((row) => castUserInfo(row))

      res.status(200).send({ users, count })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  // FIXMI: доделать
  async listByDepartment(req, res) {
    try {
      const { departmentId } = req.params
      const query = req.query
      const limit = parseInt(query.limit)
      const offset = parseInt(query.offset)
      const filter = query.filter

      const { count, rows } = await User.findAndCountAll({
        limit,
        offset,
        where: {
          departmentId: departmentId,
          [Op.or]: [
            {
              login: { [Op.substring]: filter },
            },
            {
              name: { [Op.substring]: filter },
            },
            {
              surname: { [Op.substring]: filter },
            },
          ],
        },
      })

      res.status(200).send({ users: rows, count })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async get(req, res) {
    try {
      const id = parseInt(req.params.id)

      const user = await getUser('id', id)

      const userInfo = castUserInfo(user)

      res.status(200).send(userInfo)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      await User.destroy({
        where: { id },
      })

      res.status(200).send({ message: 'Пользователь успешно удален' })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
