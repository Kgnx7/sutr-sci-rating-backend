const express = require('express')
const router = express.Router()

const { departments } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, departments.list)
router.get('/delete/:id', isAuthenticated, departments.delete)
router.post('/edit/:id', isAuthenticated, departments.edit)
router.post('/create', isAuthenticated, departments.create)

module.exports = router
