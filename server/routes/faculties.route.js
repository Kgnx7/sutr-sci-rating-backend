const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');
const groups = require('../utils/groups');

const { faculties } = require('../controllers')

const { isAuthenticated, hasRole, inGroup } = require('../middleware');

router.get('/list', isAuthenticated, inGroup(groups.University), faculties.list);
router.post('/create', isAuthenticated, hasRole(roles.Admin), faculties.create);

router.get('/departments', isAuthenticated, inGroup(groups.University, groups.Faculty), faculties.departments);

module.exports = router
