'use strict'
module.exports = (sequelize, DataTypes) => {
  const AcademicDegree = sequelize.define(
    'AcademicDegree',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  AcademicDegree.associate = function (models) {
    // associations can be defined here
  }
  return AcademicDegree
}
