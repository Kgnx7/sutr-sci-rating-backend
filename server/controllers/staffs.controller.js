const { Staff } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');

module.exports = {

  async list(req, res) {
    try {
      const staffs = await Staff.findAll();

      res.status(200).send(staffs);
    } catch (error) {
      res.status(400).send({message: error.message});
    }
  },

  async edit(req, res) {
    try {

      const isReqBodyCorrect = await editReq.isValid(req.body);

      if (!isReqBodyCorrect) {
        throw new Error('Некорректный запрос');
      }

      const { id, data } = req.body;

      await Staff.update(data, {
        where: { id },
      });

      const updatedStaff = await Staff.findByPk(id);

      res.status(200).send(updatedStaff);

    } catch (error) {

      res.status(400).send({ message: error.message });
    }
  },

  async create(req, res) {
    try {

      const staff = await Staff.create(req.body);

      res.status(201).send(staff);

    } catch (error) {
      res.status(400).send({message: error.message});
    }
  }
};