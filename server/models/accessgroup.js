'use strict'
module.exports = (sequelize, DataTypes) => {
  const AccessGroup = sequelize.define(
    'AccessGroup',
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
  AccessGroup.associate = function (models) {
    // associations can be defined here
  }
  return AccessGroup
}
