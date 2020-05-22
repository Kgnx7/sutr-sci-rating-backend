const { Сathedra } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');

module.exports = {

  async list(req, res) {
    try {
      const cathedras = await Сathedra.findAll();

      res.status(200).send(cathedras);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async edit(req, res) {
    try {

      const isReqBodyCorrect = await editReq.isValid(req.body);

      if (!isReqBodyCorrect) {
        throw new Error('Некорректный запрос');
      }

      const { id, data } = req.body;

      await Cathedra.update(data, {
        where: { id },
      });

      const updatedCathedra = await Cathedra.findByPk(id);

      res.status(200).send(updatedCathedra);

    } catch (error) {

      res.status(400).send({ message: error.message });
    }
  },

  async create(req, res) {
    try {

      const cathedra = await Cathedra.create(req.body);

      res.status(201).send(cathedra);

    } catch (error) {
      res.status(400).send(error);
    }
  }
};