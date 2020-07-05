const express = require('express')
const router = express.Router()

const { riaTypes } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'RiaType'),
  riaTypes.list
)

module.exports = router
