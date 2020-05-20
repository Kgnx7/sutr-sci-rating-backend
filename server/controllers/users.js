const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        title: req.body.title,
      })
      .then(User => res.status(201).send(User))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    try {
      const users = User.findAll();

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};