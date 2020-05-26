const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { departments } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), departments.list);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), departments.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), departments.create);

module.exports = router
