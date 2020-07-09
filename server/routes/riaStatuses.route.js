const express = require('express')
const router = express.Router()

const { riaStatuses } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'RiaStatus'),
  riaStatuses.list
)

module.exports = router
