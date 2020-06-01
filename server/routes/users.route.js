const express = require('express')
const router = express.Router()
const groups = require('../utils/groups')

const { users } = require('../controllers')

const { isAuthenticated, inGroup } = require('../middleware')

router.get('/list', isAuthenticated, inGroup(groups.University), users.list)
router.post('/edit', isAuthenticated, inGroup(groups.University), users.edit)
router.post(
  '/create',
  isAuthenticated,
  inGroup(groups.University),
  users.create
)
router.get('/delete', isAuthenticated, inGroup(groups.University), users.delete)

router.get(
  '/get/:id',
  isAuthenticated,
  inGroup(groups.University, groups.Faculty, groups.Department, groups.Worker),
  users.get
)

module.exports = router
