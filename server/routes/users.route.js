const express = require('express')
const router = express.Router()

const { users } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, users.list)
router.get('/delete/:id', isAuthenticated, users.delete)
router.get('/get/:id', users.get)
router.post('/edit/:id', isAuthenticated, users.edit)
router.post('/create', isAuthenticated, users.create)

module.exports = router
