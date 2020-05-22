const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { academicDegrees } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), academicDegrees.list);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), academicDegrees.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), academicDegrees.create);

module.exports = router
