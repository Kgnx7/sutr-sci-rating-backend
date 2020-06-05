const express = require('express')
const router = express.Router()

const { positions } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, positions.list)
router.get('/delete/:id', isAuthenticated, positions.delete)
router.post('/create', isAuthenticated, positions.create)
router.post('/edit/:id', isAuthenticated, positions.edit)

module.exports = router
