const User = require('../models').User;
const { editReq } = require('../utils/dataSchemas/common');
const { sequelize, Sequelize }  = require("../models");

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

      users.forEach(user => user.password = null);

      res.status(200).send(users);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async findOne(req, res) {
    try {

      const id = req.query.id;

      const user = await sequelize.query(
        `select u.*, p.title as position, c.title as Department, ad.title as AcademicDegree, ar.title as academicRank, s.title as staff
          from users as u 
          left join positions as p on (u.position = p.id)
          left join сathedras as c on (u.Department = c.id)
          left join academicdegrees as ad on (u.AcademicDegree = ad.id)
          left join academicranks as ar on (u.academicrank = ar.id)
          left join staffs as s on (u.staff = s.id) where u.id = "${id}"`,
        {
          type: Sequelize.QueryTypes.SELECT,
          model: User,
          plain: true
        }
      );

      user.password = null;

      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};