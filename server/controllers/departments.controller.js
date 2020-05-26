const { Department } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');

module.exports = {

  async list(req, res) {
    try {
      const departments = await Department.findAll();

      res.status(200).send(departments);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async edit(req, res) {
    try {

      const isReqBodyCorrect = await editReq.isValid(req.body);

      if (!isReqBodyCorrect) {
        throw new Error('Некорректный запрос');
      }

      const { id, data } = req.body;

      await Department.update(data, {
        where: { id },
      });

      const updatedDepartment = await Department.findByPk(id);

      res.status(200).send(updatedDepartment);

    } catch (error) {

      res.status(400).send({ message: error.message });
    }
  },

  async create(req, res) {
    try {

      const Department = await Department.create(req.body);

      res.status(201).send(Department);

    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};