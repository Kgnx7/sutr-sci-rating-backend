'use strict'
module.exports = (sequelize, DataTypes) => {
  const AcademicDegree = sequelize.define(
    'AcademicDegree',
    {
      userId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      degreeTypeId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      specialtyId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  )
  AcademicDegree.associate = function (models) {
    AcademicDegree.belongsTo(models.Specialty, {
      foreignKey: 'specialtyId',
      as: 'specialty',
    })
    AcademicDegree.belongsTo(models.DegreeType, {
      foreignKey: 'degreeTypeId',
      as: 'degreeType',
    })
    AcademicDegree.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }
  return AcademicDegree
}
