const express = require('express')
const router = express.Router()

const { faculties } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'Faculty'),
  faculties.list
)
router.get(
  '/get/:id',
  isAuthenticated,
  checkAccess('get', 'Faculty'),
  faculties.get
)
router.post(
  '/edit/:id',
  isAuthenticated,
  checkAccess('edit', 'Faculty'),
  faculties.edit
)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'Faculty'),
  faculties.create
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'Faculty'),
  faculties.delete
)

module.exports = router
