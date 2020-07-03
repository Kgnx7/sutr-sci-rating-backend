const express = require('express')
const router = express.Router()

const { specialties } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'Specialty'),
  specialties.list
)
// router.get(
//   '/delete/:id',
//   isAuthenticated,
//   checkAccess('delete', 'specialties'),
//   specialties.delete
// )
// router.post(
//   '/create',
//   isAuthenticated,
//   checkAccess('create', 'specialties'),
//   specialties.create
// )
// router.post(
//   '/edit/:id',
//   isAuthenticated,
//   checkAccess('edit', 'specialties'),
//   specialties.edit
// )

module.exports = router
