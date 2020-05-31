const { Faculty, Department } = require('../models');
const collectFacultyInfo = require("../utils/queries/collectFacultyInfo");
const collectDepartmentInfo = require("../utils/queries/collectDepartmentInfo");
const { editReq } = require('../utils/dataSchemas/common');

module.exports = {

  async list(req, res) {
    try {
      const faculties = await Faculty.findAll();

      for (let i = 0; i < faculties.length; i++) {
        faculties[i] = await collectFacultyInfo(faculties[i]);
      }

      res.status(200).send(faculties);
    } catch (error) {
      res.status(400).send({ message: error.message, error });
    }
  },

  async current(req, res) {
    try {

      const departmentId = req.user.departmentId

      const { faculty } = await Department.findByPk(departmentId, { attributes: ['faculty'] });

      let facultyInfo = await Faculty.findByPk(faculty);

      facultyInfo = await collectFacultyInfo(facultyInfo);

      res.status(200).send(facultyInfo);
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

      for (let i = 0; i < departments.length; i++) {
        departments[i] = await collectDepartmentInfo(departments[i]);
      }

      res.status(200).send(departments);

    } catch (error) {
      res.status(400).send({ message: error.message, error });
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
};