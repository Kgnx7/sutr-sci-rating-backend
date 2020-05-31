const { User, Department } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');
const { sequelize, Sequelize } = require("../models");
const collectUserInfo = require("../utils/queries/collectUserInfo");
const Op = Sequelize.Op
const groups = require('../utils/groups');

module.exports = {
  async create(req, res) {
    try {

      const user = await User.create(req.body);

      res.status(201).send(user);

    } catch (error) {
      res.status(400).send({ message: error });
    }
  },

  async edit(req, res) {
    try {

      const isReqBodyCorrect = await editReq.isValid(req.body);

      if (!isReqBodyCorrect) {
        throw new Error('Некорректный запрос');
      }

      const { id, data } = req.body;

      await User.update(data, {
        where: { id },
      });

      let updatedUser = await User.findByPk(id);

      updatedUser = await collectUserInfo(updatedUser);

      res.status(200).send(updatedUser);

    } catch (error) {

      res.status(400).send({ message: error.message });
    }
  },

  async list(req, res) {
    try {

      const query = req.query;
      const limit = parseInt(query.limit);
      const offset = parseInt(query.offset);
      const filter = query.filter;

      const { count, rows } = await User.findAndCountAll({
        limit,
        offset,
        where: {
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
          ]
        }
      });

      for (let i = 0; i < rows.length; i++) {
        rows[i] = await collectUserInfo(rows[i]);
      }

      res.status(200).send({ users: rows, count });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async listByDepartment(req, res) {
    try {
      const { position, departmentId } = req.user;
      const id = parseInt(req.query.id);

      if (groups.Department.includes(position) && departmentId !== id) {
        return res.status(403).json({ message: "Нет прав" });

      } else if (groups.Faculty.includes(position)) {

        const userDepartment = await Department.findByPk(departmentId, { attributes: ['faculty'] });
        const requestedDepartment = await Department.findByPk(id, { attributes: ['faculty'] });

        if (userDepartment.faculty !== requestedDepartment.faculty) {
          return res.status(403).json({ message: "Нет прав" });
        }

      }

      const query = req.query;
      const limit = parseInt(query.limit);
      const offset = parseInt(query.offset);
      const filter = query.filter;

      const { count, rows } = await User.findAndCountAll({
        limit,
        offset,
        where: {
          department: id,
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
          ]
        }
      });


      for (let i = 0; i < rows.length; i++) {
        rows[i] = await collectUserInfo(rows[i]);
      }

      res.status(200).send({ users: rows, count });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async findOne(req, res) {
    try {

      const id = req.query.id;

      const user = await User.findByPk(id);

      const userInfo = await collectUserInfo(user);

      res.status(200).send(userInfo);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async delete(req, res) {
    try {

      const id = req.query.id;

      await User.destroy({
        where: { id }
      });

      res.status(200).send({ message: 'Пользователь успешно удален' });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};