const { Position, Department, AcademicRank, AcademicDegree, Staff } = require("../../models");

module.exports = async function collectUserInfo(user) {
  try {

    const finalUser = {
      id: user.id,
      login: user.login,
      email: user.email,
      phone: user.phone,
      displayName: [user.surname, user.name, user.patronymic].join(' ').trim(),
      salaryRate: user.salaryRate,
      yearOfBirth: user.yearOfBirth
    }

    if (user.position) {
      const position = await Position.findByPk(user.position);

      if (position) {
        finalUser.positionId = user.position;
        finalUser.position = position.title;
      }
    }

    if (user.department) {
      const department = await Department.findByPk(user.department);

      if (department) {
        finalUser.departmentId = user.department;
        finalUser.department = department.short;
      }
    }

    if (user.academicRank) {
      const academicRank = await AcademicRank.findByPk(user.academicRank);

      if (academicRank) {
        finalUser.academicRankId = user.academicRank;
        finalUser.academicRank = academicRank.title;
      }
    }

    if (user.academicDegree) {
      const academicDegree = await AcademicDegree.findByPk(user.academicDegree);

      if (academicDegree) {
        finalUser.academicDegreeId = user.academicDegree;
        finalUser.academicDegree = academicDegree.title;
      }
    }

    if (user.staff) {
      const staff = await Staff.findByPk(user.staff);

      if (staff) {
        finalUser.staffId = user.staff;
        finalUser.staff = staff.title;
      }
    }

    return finalUser;

  } catch (error) {
    throw error;
  }
}
