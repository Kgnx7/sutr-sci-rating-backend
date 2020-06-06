const express = require('express')
const router = express.Router()

const { academicDegrees } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'academicDegrees'),
  academicDegrees.list
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'academicDegrees'),
  academicDegrees.delete
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'academicDegrees'),
  academicDegrees.edit
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'academicDegrees'),
  academicDegrees.create
)

module.exports = router
