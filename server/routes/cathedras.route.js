const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { cathedras } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), cathedras.list);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), cathedras.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), cathedras.create);

module.exports = router
