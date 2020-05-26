const { User } = require("../../models");

module.exports = async function getUser(field, value) {
  try {
    const user = await User.findOne({
      where: {
        [field]: value
      }
    })

    return user;

  } catch (error) {
    throw error;
  }
}
