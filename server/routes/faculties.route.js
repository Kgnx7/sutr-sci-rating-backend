const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');

const { faculties } = require('../controllers')

const { isAuthenticated, hasRole } = require('../middleware');

router.get('/list', isAuthenticated, hasRole(roles.Admin), faculties.list);
router.post('/create', isAuthenticated, hasRole(roles.Admin), faculties.create);

module.exports = router
