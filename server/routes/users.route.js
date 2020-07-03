const express = require('express')
const router = express.Router()

const { users } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get('/list', isAuthenticated, checkAccess('list', 'User'), users.list)
router.get(
  '/listByDepartment/:departmentId',
  isAuthenticated,
  checkAccess('listByDepartment', 'User'),
  users.listByDepartment
)

router.get('/get/:id', isAuthenticated, checkAccess('get', 'User'), users.get)

router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'User'),
  users.create
)
router.post(
  '/statuses/create',
  isAuthenticated,
  checkAccess('create', 'UserStatus'),
  users.createUserStatus
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'User'),
  users.edit
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'User'),
  users.delete
)

module.exports = router
