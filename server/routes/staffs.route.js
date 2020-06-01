const express = require('express')
const router = express.Router()
const groups = require('../utils/groups')

const { staffs } = require('../controllers')

const { isAuthenticated, inGroup } = require('../middleware')

router.get('/list', isAuthenticated, inGroup(groups.University), staffs.list)
router.post('/edit', isAuthenticated, inGroup(groups.University), staffs.edit)
router.post(
  '/create',
  isAuthenticated,
  inGroup(groups.University),
  staffs.create
)

module.exports = router
