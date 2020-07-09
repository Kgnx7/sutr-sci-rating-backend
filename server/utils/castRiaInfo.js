module.exports = function castRiaInfo(ria) {
  try {
    const output = {
      title: ria.title,
      authors: ria.authors,
      description: ria.description,
      riaTypeId: ria.riaTypeId,
      rsTypeId: ria.rsTypeId,
      riaStatusId: ria.riaStatusId,
      riaType: ria.riaType && ria.riaType.title,
      rsType: ria.rsType && ria.rsType.title,
      riaStatus: ria.riaStatus && ria.riaStatus.title,
      users: ria.users.map((user) => ({
        id: user.id,
        displayName: [user.surname, user.name, user.patronomyc]
          .join(' ')
          .trim(),
        part: user.RiaAuthors.part,
        role: user.RiaAuthors.role,
      })),
      states: [],
      fundSources: [],
      createdAt: ria.createdAt,
      updatedAt: ria.updatedAt,
    }

    return output
  } catch (error) {
    throw error
  }
}
