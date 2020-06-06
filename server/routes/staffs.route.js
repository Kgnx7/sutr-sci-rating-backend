const express = require('express')
const router = express.Router()

const { staffs } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get('/list', isAuthenticated, checkAccess('list', 'staffs'), staffs.list)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'staffs'),
  staffs.delete
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'staffs'),
  staffs.edit
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'staffs'),
  staffs.create
)

module.exports = router
