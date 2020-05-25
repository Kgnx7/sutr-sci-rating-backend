const { academicDegree } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');

module.exports = {

  async list(req, res) {
    try {
      const academicDegrees = await academicDegree.findAll();

      res.status(200).send(academicDegrees);
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

      await academicDegree.update(data, {
        where: { id },
      });

      const updatedAcademicDegree = await academicDegree.findByPk(id);

      res.status(200).send(updatedAcademicDegree);

    } catch (error) {

      res.status(400).send({ message: error.message });
    }
  },

  async create(req, res) {
    try {

      const academicDegrees = await academicDegree.create(req.body);

      res.status(201).send(academicDegrees);

    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};