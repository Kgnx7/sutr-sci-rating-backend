const express = require('express')
const router = express.Router()
const groups = require('../utils/groups');

const { users } = require('../controllers')

const { isAuthenticated, inGroup } = require('../middleware');

router.get('/list', isAuthenticated, inGroup(groups.University), users.list);
// router.get('/listByDepartment', isAuthenticated, inGroup(groups.Faculty, groups.), users.listByDepartment);
router.get('/get', isAuthenticated, inGroup(groups.University), users.findOne);
router.post('/edit', isAuthenticated, inGroup(groups.University), users.edit);
router.post('/create', isAuthenticated, inGroup(groups.University), users.create);
router.get('/delete', isAuthenticated, inGroup(groups.University), users.delete);

module.exports = router
