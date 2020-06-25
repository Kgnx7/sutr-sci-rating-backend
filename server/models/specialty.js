'use strict'
module.exports = (sequelize, DataTypes) => {
  const Specialty = sequelize.define(
    'Specialty',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['title', 'code'],
        },
      ],
    }
  )
  Specialty.associate = function (models) {
    // associations can be defined here
  }
  return Specialty
}
