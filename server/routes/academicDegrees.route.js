const express = require('express')
const router = express.Router()
const groups = require('../utils/groups')

const { academicDegrees } = require('../controllers')

const { isAuthenticated, inGroup } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  inGroup(groups.University),
  academicDegrees.list
)
router.post(
  '/edit',
  isAuthenticated,
  inGroup(groups.University),
  academicDegrees.edit
)
router.post(
  '/create',
  isAuthenticated,
  inGroup(groups.University),
  academicDegrees.create
)

module.exports = router
