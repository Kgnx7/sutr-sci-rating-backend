'use strict'
module.exports = (sequelize, DataTypes) => {
  const DegreeType = sequelize.define(
    'DegreeType',
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
  DegreeType.associate = function (models) {
    // associations can be defined here
  }
  return DegreeType
}
