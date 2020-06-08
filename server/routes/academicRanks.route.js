const express = require('express')
const router = express.Router()

const { academicRangs } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'academicRanks'),
  academicRangs.list
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'academicRanks'),
  academicRangs.delete
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'academicRanks'),
  academicRangs.edit
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'academicRanks'),
  academicRangs.create
)

module.exports = router
