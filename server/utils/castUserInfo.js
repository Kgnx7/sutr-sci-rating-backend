module.exports = function castUserInfo(user) {
  try {
    const finalUser = {
      id: user.id,
      login: user.login,
      displayName: [user.surname, user.name, user.patronymic].join(' ').trim(),
      name: user.name,
      surname: user.surname,
      patronymic: user.patronymic,
      position: user.position && user.position.title,
      academicRank: user.academicRank && user.academicRank.title,
      academicRankId: user.academicRankId,
      accessGroupId: user.accessGroupId,
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
        user.academicDegrees.map((degree) => ({
          specialty: degree.specialty && degree.specialty.title,
          degreeType: degree.degreeType && degree.degreeType.title,
        })),
      ria: user.ria,
    }

    return finalUser
  } catch (error) {
    throw error
  }
}
