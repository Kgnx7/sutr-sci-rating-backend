const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { positions } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), positions.list);
router.post('/create', isAuthenticated, hasRole(roles.Admin), positions.create);

module.exports = router
