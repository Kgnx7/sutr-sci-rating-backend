module.exports = function castUserInfo(user) {
  try {
    const finalUser = {
      login: user.login,
      displayName: [user.surname, user.name, user.patronymic].join(' ').trim(),
      position: {
        id: user.positionId,
        data: user.position,
      },
      department: {
        id: user.departmentId,
        data: user.department,
      },
      accessGroup: {
        id: user.accessGroupId,
        data: user.accessGroup,
      },
    }

    return finalUser
  } catch (error) {
    throw error
  }
}
