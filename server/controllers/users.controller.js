const User = require('../models').User;
const userEditReq = require('../utils/dataSchemas/userEditReq');

module.exports = {
  async create(req, res) {
    try {

      const user = await User.create(req.body);

      res.status(201).send(user);

    } catch (error) {
      res.status(400).send(error);
    }
  },

  async edit(req, res) {
    try {

      const isReqBodyCorrect = await userEditReq.isValid(req.body);

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

      users.forEach(user => user.password = null);

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};