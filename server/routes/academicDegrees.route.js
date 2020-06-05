const express = require('express')
const router = express.Router()

const { academicDegrees } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, academicDegrees.list)
router.get('/delete/:id', isAuthenticated, academicDegrees.delete)
router.post('/edit/:id', isAuthenticated, academicDegrees.edit)
router.post('/create', isAuthenticated, academicDegrees.create)

module.exports = router
