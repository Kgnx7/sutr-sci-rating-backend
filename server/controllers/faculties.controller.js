const { Faculty, Department } = require('../models');

module.exports = {

  async list(req, res) {
    try {
      const faculties = await Faculty.findAll();

      res.status(200).send(faculties);
    } catch (error) {
      res.status(400).send({ message: error.message, error });
    }
  },

  async create(req, res) {
    try {
      const faculty = await Faculty.create(req.body);

      res.status(201).send(faculty);
    } catch (error) {
      res.status(400).send({ message: error.message, error });
    }
  },

  async departments(req, res) {
    try {

      const { id } = req.query;

      const departments = await Department.findAll({
        where: {
          faculty: id
        }
      });

      res.status(200).send(departments);

    } catch (error) {
      res.status(400).send({ message: error.message, error });
    }
  }
};