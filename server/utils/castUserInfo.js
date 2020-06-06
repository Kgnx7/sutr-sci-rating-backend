module.exports = function castUserInfo(user) {
  try {
    const finalUser = {
      id: user.id,
      login: user.login,
      displayName: [user.surname, user.name, user.patronymic].join(' ').trim(),
      position: user.position && user.position.title,
      department: user.department && user.department.title,
      accessGroup: user.accessGroup && user.accessGroup.title,
    }

    return finalUser
  } catch (error) {
    throw error
  }
}
