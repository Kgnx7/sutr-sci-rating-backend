const express = require('express')
const router = express.Router()

const { accessGroups } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'accessGroups'),
  accessGroups.list
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'accessGroups'),
  accessGroups.delete
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'accessGroups'),
  accessGroups.edit
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'accessGroups'),
  accessGroups.create
)

module.exports = router
