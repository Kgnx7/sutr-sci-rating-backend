const { Position } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');

module.exports = {

  async list(req, res) {
    try {
      const positions = await Position.findAll();

      res.status(200).send(positions);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const position = await Position.create(req.body);

      res.status(201).send(position);
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

      await Position.update(data, {
        where: { id },
      });

      const updatedPosition = await Position.findByPk(id);

      res.status(200).send(updatedPosition);

    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};