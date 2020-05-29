const { Department, User } = require('../models');
const { editReq } = require('../utils/dataSchemas/common');
const collectDepartmentInfo = require('../utils/queries/collectDepartmentInfo');
const collectUserInfo = require('../utils/queries/collectUserInfo');

module.exports = {

  async list(req, res) {
    try {
      const departments = await Department.findAll();

      for (let i = 0; i < departments.length; i++) {
        departments[i] = await collectDepartmentInfo(departments[i]);
      }

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
  },

  async staff(req, res) {
    try {

      const { id } = req.query;

      const staffOfDepartment = await User.findAll({
        where: {
          department: id
        }
      });

      for (let i = 0; i < staffOfDepartment.length; i++) {
        staffOfDepartment[i] = await collectUserInfo(staffOfDepartment[i]);
      }

      res.status(200).send(staffOfDepartment);

    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};