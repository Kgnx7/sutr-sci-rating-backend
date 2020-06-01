const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth.controller')
const { isAuthenticated } = require('../middleware')

router.post('/login', auth.login)
router.get('/currentUser', isAuthenticated, auth.getUser)
router.get('/logout', auth.logout)

module.exports = router
