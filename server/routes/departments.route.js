const express = require('express')
const router = express.Router()

const { departments } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'Department'),
  departments.list
)
router.get(
  '/listByFaculty/:facultyId',
  isAuthenticated,
  checkAccess('listByFaculty', 'Department'),
  departments.listByFaculty
)
router.get(
  '/get/:id',
  isAuthenticated,
  checkAccess('get', 'Department'),
  departments.get
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'Department'),
  departments.delete
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'Department'),
  departments.edit
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'Department'),
  departments.create
)

module.exports = router
