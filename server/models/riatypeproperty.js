'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaTypeProperty = sequelize.define(
    'RiaTypeProperty',
    {
      typeId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      propertyId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {}
  )
  RiaTypeProperty.associate = function (models) {
    // associations can be defined here
  }
  return RiaTypeProperty
}
