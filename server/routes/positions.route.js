const express = require('express')
const router = express.Router()

const { positions } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'positions'),
  positions.list
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'positions'),
  positions.delete
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'positions'),
  positions.create
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'positions'),
  positions.edit
)

module.exports = router
