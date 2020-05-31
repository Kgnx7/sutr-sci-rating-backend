const express = require('express')
const router = express.Router()
const roles = require('../utils/roles');
const groups = require('../utils/groups');

const { faculties } = require('../controllers')

const { isAuthenticated, hasRole, inGroup } = require('../middleware');

router.get('/current', isAuthenticated, inGroup(groups.Faculty), faculties.current);
router.get('/list', isAuthenticated, inGroup(groups.University), faculties.list);
router.post('/create', isAuthenticated, inGroup(groups.University), faculties.create);
router.post('/edit', isAuthenticated, inGroup(groups.University), faculties.edit);
router.get('/departments', isAuthenticated, inGroup(groups.University), faculties.departments);

module.exports = router
