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
// router.get('/delete/:id', isAuthenticated, checkAccess('delete', 'faculties'), faculties.delete)
// router.post('/edit/:id', isAuthenticated, checkAccess('edit', 'faculties'), faculties.edit)
// router.post('/create', isAuthenticated, checkAccess('create', 'faculties'), faculties.create)

module.exports = router
