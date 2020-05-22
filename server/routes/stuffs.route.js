const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { stuffs } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), stuffs.list);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), stuffs.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), stuffs.create);

module.exports = router
