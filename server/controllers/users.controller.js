const User = require('../models').User;
const { editReq } = require('../utils/dataSchemas/common');
const { sequelize, Sequelize }  = require("../models");
const collectUserInfo = require("../utils/queries/collectUserInfo");

module.exports = {
  async create(req, res) {
    try {

      const user = await User.create(req.body);
      // const user = req.body;

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

      const updatedUser = await User.findByPk(id);

      updatedUser.password = null;

      res.status(200).send(updatedUser);

    } catch (error) {

      res.status(400).send({ message: error.message });
    }
  },

  async list(req, res) {
    try {
      const users = await User.findAll();

      for (let i = 0; i < users.length; i++) {
        users[i] = await collectUserInfo(users[i]);
      }

      res.status(200).send(users);
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
  }
};