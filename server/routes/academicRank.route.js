const express = require('express')
const router = express.Router()

const { academicRangs } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, academicRangs.list)
router.get('/delete/:id', isAuthenticated, academicRangs.delete)
router.post('/edit/:id', isAuthenticated, academicRangs.edit)
router.post('/create', isAuthenticated, academicRangs.create)

module.exports = router
