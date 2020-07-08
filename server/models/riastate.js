'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaState = sequelize.define(
    'RiaState',
    {
      riaId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      stateId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      stateChangeDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  )
  RiaState.associate = function (models) {
    // associations can be defined here
  }
  return RiaState
}
