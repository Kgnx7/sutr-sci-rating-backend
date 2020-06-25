'use strict'
module.exports = (sequelize, DataTypes) => {
  const EmploymentType = sequelize.define(
    'EmploymentType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      short: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['title', 'short'],
        },
      ],
    }
  )
  EmploymentType.associate = function (models) {
    // associations can be defined here
  }
  return EmploymentType
}
