const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { staffs } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), staffs.list);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), staffs.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), staffs.create);

module.exports = router
