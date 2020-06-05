const express = require('express')
const router = express.Router()

const { staffs } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, staffs.list)
router.get('/delete/:id', isAuthenticated, staffs.delete)
router.post('/edit/:id', isAuthenticated, staffs.edit)
router.post('/create', isAuthenticated, staffs.create)

module.exports = router
