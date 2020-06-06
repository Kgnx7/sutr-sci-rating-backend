const express = require('express')
const router = express.Router()

const { faculties } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get('/list', isAuthenticated, checkAccess('list', 'faculties'), faculties.list)
router.get('/get/:id', isAuthenticated, checkAccess('get', 'faculties'), faculties.get)
router.get('/delete/:id', isAuthenticated, checkAccess('delete', 'faculties'), faculties.delete)
router.post('/edit/:id', isAuthenticated, checkAccess('edit', 'faculties'), faculties.edit)
router.post('/create', isAuthenticated, checkAccess('create', 'faculties'), faculties.create)

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
