const express = require('express')
const router = express.Router()

const { ria } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get('/list', isAuthenticated, checkAccess('list', 'Ria'), ria.list)
router.get('/get/:id', isAuthenticated, checkAccess('get', 'Ria'), ria.get)
router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'Ria'),
  ria.create
)
router.post(
  '/addProperty',
  isAuthenticated,
  checkAccess('edit', 'Ria'),
  ria.addProperty
)
// router.post(
//   '/edit/:id',
//   isAuthenticated,
//   checkAccess('edit', 'Ria'),
//   ria.edit
// )
// router.get(
//   '/delete/:id',
//   isAuthenticated,
//   checkAccess('delete', 'Ria'),
//   ria.delete
// )

module.exports = router
