const express = require('express')
const router = express.Router()

const { faculties } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, faculties.list)
router.get('/get/:id', isAuthenticated, faculties.get)
router.get('/delete/:id', isAuthenticated, faculties.delete)
router.post('/edit/:id', isAuthenticated, faculties.edit)
router.post('/create', isAuthenticated, faculties.create)

// router.get(
//   '/:facultyId/departments',
//   isAuthenticated,
//   departments.listByFaculty
// )
// router.get(
//   '/:facultyId/departments/:departmentId',
//   isAuthenticated,
//   departments.get
// )
// router.get(
//   '/:facultyId/departments/:departmentId/users',
//   isAuthenticated,
//   users.listByDepartment
// )

module.exports = router
