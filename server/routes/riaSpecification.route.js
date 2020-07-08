const express = require('express')
const router = express.Router()

const { riaSpecifications } = require('../controllers')

const { isAuthenticated, checkAccess } = require('../middleware')

router.get(
  '/list',
  isAuthenticated,
  checkAccess('list', 'RiaSpecification'),
  riaSpecifications.list
)

router.post(
  '/create',
  isAuthenticated,
  checkAccess('create', 'RiaSpecification'),
  riaSpecifications.create
)
router.get(
  '/delete/:id',
  isAuthenticated,
  checkAccess('delete', 'RiaSpecification'),
  riaSpecifications.delete
)

module.exports = router
