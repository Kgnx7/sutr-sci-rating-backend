const User = require('../models').User;
const bcrypt = require("bcryptjs");

module.exports = {
//   create(req, res) {
//     try {

      // const user = User.create({

      // });

      // res.status(201).send(User);

  //   } catch (error) {
  //     res.status(400).send(error);
  //   }
  // },

  async list(req, res) {
    try {
      const users = await User.findAll();

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};