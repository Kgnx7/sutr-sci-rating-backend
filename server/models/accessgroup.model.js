'use strict'
module.exports = (sequelize, DataTypes) => {
  const AccessGroup = sequelize.define(
    'AccessGroup',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flags: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  )
  AccessGroup.associate = function (models) {
    // associations can be defined here
  }
  return AccessGroup
}
