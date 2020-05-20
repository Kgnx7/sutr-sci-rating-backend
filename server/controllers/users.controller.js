const User = require('../models').User;
const bcrypt = require("bcryptjs");

module.exports = {
  create(req, res) {
    return User
      .create({
        title: req.body.title,
      })
      .then(User => res.status(201).send(User))
      .catch(error => res.status(400).send(error));
  },

  async list(req, res) {
    try {
      const users = await User.findAll();

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};