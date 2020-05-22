const { Stuff } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');

module.exports = {

  async list(req, res) {
    try {
      const stuffs = await Stuff.findAll();

      res.status(200).send(stuffs);
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

      await Stuff.update(data, {
        where: { id },
      });

      const updatedStuff = await Stuff.findByPk(id);

      res.status(200).send(updatedStuff);

    } catch (error) {

      res.status(400).send({ message: error.message });
    }
  },

  async create(req, res) {
    try {

      const stuff = await Stuff.create(req.body);

      res.status(201).send(stuff);

    } catch (error) {
      res.status(400).send(error);
    }
  }
};