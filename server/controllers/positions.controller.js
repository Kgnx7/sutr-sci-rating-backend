const { Position } = require('../models');

module.exports = {

  async list(req, res) {
    try {
      const positions = await Position.findAll();

      res.status(200).send(positions);
    } catch (error) {
      res.status(400).send({message: error.message});
    }
  },
};