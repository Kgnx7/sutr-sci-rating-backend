const express = require('express')
const router = express.Router()

const { accessGroups } = require('../controllers')

const { isAuthenticated } = require('../middleware')

router.get('/list', isAuthenticated, accessGroups.list)
router.get('/delete', isAuthenticated, accessGroups.delete)
router.post('/edit', isAuthenticated, accessGroups.edit)
router.post('/create', isAuthenticated, accessGroups.create)

module.exports = router
