const express = require('express')
const router = express.Router()

const { employmentTypes } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'EmploymentType'),
  employmentTypes.list
)
// router.get(
//   '/delete/:id',
//   isAuthenticated,
//   checkAccess('delete', 'employmentTypes'),
//   employmentTypes.delete
// )
// router.post(
//   '/edit/:id',
//   isAuthenticated,
//   checkAccess('edit', 'employmentTypes'),
//   employmentTypes.edit
// )
// router.post(
//   '/create',
//   isAuthenticated,
//   checkAccess('create', 'employmentTypes'),
//   employmentTypes.create
// )

module.exports = router
