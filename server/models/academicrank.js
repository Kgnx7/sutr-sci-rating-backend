'use strict'
module.exports = (sequelize, DataTypes) => {
  const AcademicRank = sequelize.define(
    'AcademicRank',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['title'],
        },
      ],
    }
  )
  AcademicRank.associate = function (models) {
    // associations can be defined here
  }
  return AcademicRank
}
