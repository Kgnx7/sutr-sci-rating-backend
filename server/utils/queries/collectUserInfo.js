const { User, Position } = require("../../models");

module.exports = async function collectUserInfo(user) {
  try {

    const finalUser = {
      id: user.id,
      login: user.login,
      mail: user.mail
    }

    if (user.position) {
      const position = await Position.findByPk(user.position);

      finalUser.position = position.title;
    }

    return finalUser;

  } catch (error) {
    throw error;
  }
}
