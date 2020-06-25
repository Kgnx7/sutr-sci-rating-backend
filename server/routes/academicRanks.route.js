const express = require('express')
const router = express.Router()

const { academicRanks } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'academicRanks'),
  academicRanks.list
)
// router.get(
//   '/delete/:id',
//   // isAuthenticated,
//   // checkAccess('delete', 'academicRanks'),
//   academicRanks.delete
// )
// router.post(
//   '/edit/:id',
//   // isAuthenticated,
//   // checkAccess('edit', 'academicRanks'),
//   academicRanks.edit
// )
// router.post(
//   '/create',
//   // isAuthenticated,
//   // checkAccess('create', 'academicRanks'),
//   academicRanks.create
// )

module.exports = router
