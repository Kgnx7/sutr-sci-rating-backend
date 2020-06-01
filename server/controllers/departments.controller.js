const { Department, User } = require('../models')
const { editReq } = require('../utils/dataSchemas/common')
const collectDepartmentInfo = require('../utils/queries/collectDepartmentInfo')
const collectUserInfo = require('../utils/queries/collectUserInfo')
const groups = require('../utils/groups')

module.exports = {
  async list(req, res) {
    try {
      const departments = await Department.findAll()

      for (let i = 0; i < departments.length; i++) {
        departments[i] = await collectDepartmentInfo(departments[i])
      }

      res.status(200).send(departments)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async listByFaculty(req, res) {
    try {
      const requestedFacultyId = parseInt(req.params.facultyId)
      const userFacultyId = req.user.facultyId
      const userPosition = req.user.position

      if (
        groups.Faculty.includes(userPosition) &&
        userFacultyId !== requestedFacultyId
      ) {
        return res.status(403).json({ message: 'Нет прав' })
      }

      const departments = await Department.findAll({
        where: {
          faculty: requestedFacultyId,
        },
      })

      for (let i = 0; i < departments.length; i++) {
        departments[i] = await collectDepartmentInfo(departments[i])
      }

      res.status(200).send(departments)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async get(req, res) {
    try {
      const requestedFacultyId = parseInt(req.params.facultyId)
      const requestedDepartmnetId = parseInt(req.params.departmentId)
      const userFacultyId = req.user.facultyId
      const userDepartmentId = req.user.departmentId
      const userPosition = req.user.position

      if (
        (groups.Faculty.includes(userPosition) &&
          userFacultyId !== requestedFacultyId) ||
        (groups.Department.includes(userPosition) &&
          requestedDepartmnetId !== userDepartmentId)
      ) {
        return res.status(403).json({ message: 'Нет прав' })
      }

      const department = await Department.findByPk(requestedDepartmnetId)

      const departmentInfo = await collectDepartmentInfo(department)

      res.status(200).send(departmentInfo)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async edit(req, res) {
    try {
      const isReqBodyCorrect = await editReq.isValid(req.body)

      if (!isReqBodyCorrect) {
        throw new Error('Некорректный запрос')
      }

      const { id, data } = req.body

      await Department.update(data, {
        where: { id },
      })

      let updatedDepartment = await Department.findByPk(id)

      updatedDepartment = await collectDepartmentInfo(updatedDepartment)

      res.status(200).send(updatedDepartment)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },

  async create(req, res) {
    try {
      const Department = await Department.create(req.body)

      res.status(201).send(Department)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
