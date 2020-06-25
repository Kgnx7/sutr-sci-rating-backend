const express = require('express')
const router = express.Router()

const { users } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get('/list', isAuthenticated, checkAccess('list', 'users'), users.list)
router.get(
  '/listByDepartment/:departmentId',
  isAuthenticated,
  checkAccess('listByDepartment', 'users'),
  users.listByDepartment
)
router.get('/get/:id', isAuthenticated, checkAccess('get', 'User'), users.get)

// router.get(
//   '/delete/:id',
//   isAuthenticated,
//   checkAccess('delete', 'users'),
//   users.delete
// )
// router.post(
//   '/edit/:id',
//   isAuthenticated,
//   checkAccess('edit', 'users'),
//   users.edit
// )
// router.post(
//   '/create',
//   isAuthenticated,
//   checkAccess('create', 'users'),
//   users.create
// )

module.exports = router
