'use strict'
module.exports = (sequelize, DataTypes) => {
  const RidType = sequelize.define(
    'RidType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  RidType.associate = function (models) {
    // associations can be defined here
  }
  return RidType
}
