const express = require('express')
const router = express.Router()

const { academicDegrees } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'AcademicDegree'),
  academicDegrees.create
)

router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'AcademicDegree'),
  academicDegrees.delete
)

module.exports = router
