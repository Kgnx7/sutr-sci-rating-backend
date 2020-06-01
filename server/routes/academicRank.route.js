const express = require('express')
const router = express.Router()
const groups = require('../utils/groups')

const { academicRangs } = require('../controllers')

const { isAuthenticated, inGroup } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  inGroup(groups.University),
  academicRangs.list
)
router.post(
  '/edit',
  isAuthenticated,
  inGroup(groups.University),
  academicRangs.edit
)
router.post(
  '/create',
  isAuthenticated,
  inGroup(groups.University),
  academicRangs.create
)

module.exports = router
