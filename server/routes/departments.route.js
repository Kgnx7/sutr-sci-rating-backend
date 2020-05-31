const express = require('express');
const router = express.Router();
const roles = require('../utils/roles');
const groups = require('../utils/groups');

const { departments } = require('../controllers');

const { isAuthenticated, hasRole, inGroup } = require('../middleware');

router.get('/list', isAuthenticated, inGroup(groups.University), departments.list);
router.get('/listByFaculty', isAuthenticated, inGroup(groups.University, groups.Faculty), departments.listByFaculty);
router.post('/edit', isAuthenticated, hasRole(roles.Admin), departments.edit);
router.post('/create', isAuthenticated, hasRole(roles.Admin), departments.create);
router.get('/staff', isAuthenticated, inGroup(groups.University, groups.Faculty, groups.Department), departments.staff);

module.exports = router
