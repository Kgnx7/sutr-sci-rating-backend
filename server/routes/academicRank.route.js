const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { academicRangs } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), academicRangs.list);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), academicRangs.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), academicRangs.create);

module.exports = router
