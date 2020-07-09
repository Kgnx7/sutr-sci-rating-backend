const express = require('express')
const router = express.Router()

const { rsTypes } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'RsType'),
  rsTypes.list
)

module.exports = router
