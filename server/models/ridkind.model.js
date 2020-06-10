'use strict'
module.exports = (sequelize, DataTypes) => {
  const RidKind = sequelize.define(
    'RidKind',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      perUnit: {
        type: DataTypes.FLOAT,
        // allowNull: false
      },
      ridTypeId: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  RidKind.associate = function (models) {
    // associations can be defined here
  }
  return RidKind
}
