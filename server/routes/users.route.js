const express = require('express')
const router = express.Router()
const passport = require("passport")
const users = require('../controllers/users.controller')

router.get('/', users.list);

module.exports = router
