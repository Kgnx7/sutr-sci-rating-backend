const express = require('express')
const router = express.Router()
const passport = require("passport")
const auth = require('../controllers/auth.controller')

router.post('/login', auth.login);
// router.get('/getUser', auth.getUser);
router.get('/logout', auth.logout);

module.exports = router