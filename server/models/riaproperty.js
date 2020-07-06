'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaProperty = sequelize.define(
    'RiaProperty',
    {
      riaId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      propertyId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  RiaProperty.associate = function (models) {
    // associations can be defined here
  }
  return RiaProperty
}
