module.exports = function castRiaTypeInfo(riaType) {
  try {
    const finalUser = {
      id: riaType.id,
      title: riaType.title,
      unit: riaType.unit,
      perUnit: riaType.perUnit,
      description: riaType.description,
      createdAt: riaType.createdAt,
      updatedAt: riaType.updatedAt,
      generalTypeId: 1,
      generalType: riaType.generalType && riaType.generalType.title,

      specifications: riaType.specifications || [],
    }

    return finalUser
  } catch (error) {
    throw error
  }
}
