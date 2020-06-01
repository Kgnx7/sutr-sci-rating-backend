const express = require('express')
const router = express.Router()
const roles = require('../utils/roles')
const groups = require('../utils/groups')

const { positions } = require('../controllers')

const { isAuthenticated, hasRole, inGroup } = require('../middleware')

router.get('/list', isAuthenticated, inGroup(groups.University), positions.list)
router.post('/create', isAuthenticated, hasRole(roles.Admin), positions.create)
router.post('/edit', isAuthenticated, hasRole(roles.Admin), positions.edit)

module.exports = router
