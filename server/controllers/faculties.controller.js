const { Faculty, Department } = require('../models')
const collectFacultyInfo = require('../utils/queries/collectFacultyInfo')
const collectDepartmentInfo = require('../utils/queries/collectDepartmentInfo')
const { editReq } = require('../utils/dataSchemas/common')
const groups = require('../utils/groups')

module.exports = {
  async list(req, res) {
    try {
      const faculties = await Faculty.findAll()

      for (let i = 0; i < faculties.length; i++) {
        faculties[i] = await collectFacultyInfo(faculties[i])
      }

      res.status(200).send(faculties)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },

  async get(req, res) {
    try {
      const { position, facultyId } = req.user
      const requestedFacultyId = parseInt(req.params.facultyId)

      if (
        groups.Faculty.includes(position) &&
        facultyId !== requestedFacultyId
      ) {
        return res.status(403).json({ message: 'Нет прав' })
      }

      const faculty = await Faculty.findByPk(requestedFacultyId)
      const facultyInfo = await collectFacultyInfo(faculty)

      res.status(200).send(facultyInfo)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
    }
  },

  async create(req, res) {
    try {
      const faculty = await Faculty.create(req.body)

      res.status(201).send(faculty)
    } catch (error) {
      res.status(400).send({ message: error.message, error })
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

      const updatedDepartment = await Department.findByPk(id)

      res.status(200).send(updatedDepartment)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  },
}
