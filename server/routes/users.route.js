const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { users } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), users.list);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), users.edit);
// router.get('/hash', users.hash);

module.exports = router
