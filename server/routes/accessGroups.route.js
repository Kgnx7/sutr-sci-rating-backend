const express = require('express')
const router = express.Router()

const { accessGroups } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'AccessGroup'),
  accessGroups.list
)

module.exports = router
