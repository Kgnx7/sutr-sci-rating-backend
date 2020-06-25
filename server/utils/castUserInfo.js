module.exports = function castUserInfo(user) {
  try {
    const finalUser = {
      id: user.id,
      login: user.login,
      displayName: [user.surname, user.name, user.patronymic].join(' ').trim(),
      position: user.position && user.position.title,
      academicRank: user.academicRank && user.academicRank.title,
      accessGroup: user.accessGroup && user.accessGroup.title,
      phone: user.phone,
      email: user.email,
      states:
        user.states &&
        user.states.map((state) => ({
          position: state.position.title,
          department: state.department.title,
          employmentType: state.employmentType.title,
          salaryRate: state.salaryRate,
        })),
      academicDegrees:
        user.academicDegrees &&
        user.academicDegrees.map((state) => ({
          specialty: state.specialty.title,
          degreeType: state.degreeType.title,
        })),
    }

    return finalUser
  } catch (error) {
    throw error
  }
}
