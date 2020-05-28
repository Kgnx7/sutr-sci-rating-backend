const { User, Position, Department } = require("../../models");

module.exports = async function collectUserInfo(user) {
  try {

    const finalUser = {
      id: user.id,
      login: user.login,
      mail: user.mail
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

    return finalUser;

  } catch (error) {
    throw error;
  }
}
