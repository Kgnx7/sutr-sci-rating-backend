const express = require('express')
const router = express.Router()
const roles = require('../utils/roles')
const groups = require('../utils/groups')

const { departments } = require('../controllers')

const { isAuthenticated, hasRole, inGroup } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  inGroup(groups.University),
  departments.list
)
router.post('/edit', isAuthenticated, hasRole(roles.Admin), departments.edit)
router.post(
  '/create',
  isAuthenticated,
  hasRole(roles.Admin),
  departments.create
)

module.exports = router
