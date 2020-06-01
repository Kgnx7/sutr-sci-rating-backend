const express = require('express')
const router = express.Router()
const groups = require('../utils/groups')

const { faculties, departments, users } = require('../controllers')

const { isAuthenticated, inGroup } = require('../middleware')

router.get(
  '/get/:facultyId',
  isAuthenticated,
  inGroup(groups.University, groups.Faculty),
  faculties.get
)
router.get(
  '/:facultyId/departments',
  isAuthenticated,
  inGroup(groups.University, groups.Faculty),
  departments.listByFaculty
)
router.get(
  '/:facultyId/departments/:departmentId',
  isAuthenticated,
  inGroup(groups.University, groups.Faculty, groups.Department),
  departments.get
)
router.get(
  '/:facultyId/departments/:departmentId/users',
  isAuthenticated,
  inGroup(groups.University, groups.Faculty, groups.Department),
  users.listByDepartment
)

router.get('/list', isAuthenticated, inGroup(groups.University), faculties.list)
router.post(
  '/create',
  isAuthenticated,
  inGroup(groups.University),
  faculties.create
)
router.post(
  '/edit',
  isAuthenticated,
  inGroup(groups.University),
  faculties.edit
)

module.exports = router
