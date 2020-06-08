const express = require('express')
const router = express.Router()

const { departments } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'departments'),
  departments.list
)

router.get(
  '/listByFaculty/:facultyId',
  isAuthenticated,
  checkAccess('listByFaculty', 'departments'),
  departments.listByFaculty
)

router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'departments'),
  departments.delete
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'departments'),
  departments.edit
)
router.get(
  '/get/:id',
  isAuthenticated,
  checkAccess('get', 'departments'),
  departments.get
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'departments'),
  departments.create
)

module.exports = router
