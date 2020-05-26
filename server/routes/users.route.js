const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { users } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), users.list);
router.get('/get', isAuthenticated, hasRole(roles.Admin), users.findOne);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), users.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), users.create);

module.exports = router
