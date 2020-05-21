const roles = require('./roles');

const GROUPS = {
  University: [roles.Admin, roles.Rector],
  Faculty: [roles.Dean],
  Cathedra: [roles.HeadOfDepartment],
  Worker: [roles.Lecturer, roles.SeniorLecturer, roles.Docent, roles.Professor]
}

module.exports = GROUPS;