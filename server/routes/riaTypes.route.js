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
router.get(
  '/get/:id',
  isAuthenticated,
  checkAccess('get', 'RiaType'),
  riaTypes.get
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'RiaType'),
  riaTypes.create
)
router.post(
  '/addProperty',
  isAuthenticated,
  checkAccess('edit', 'RiaType'),
  riaTypes.addProperty
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'RiaType'),
  riaTypes.edit
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'RiaType'),
  riaTypes.delete
)

module.exports = router
