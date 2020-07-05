const express = require('express')
const router = express.Router()

const { riaGeneralTypes } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'RiaGeneralType'),
  riaGeneralTypes.list
)

module.exports = router
