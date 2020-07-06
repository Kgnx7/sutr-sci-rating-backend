'use strict'
module.exports = (sequelize, DataTypes) => {
  const riaStatus = sequelize.define(
    'riaStatus',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {}
  )
  riaStatus.associate = function (models) {
    // associations can be defined here
  }
  return riaStatus
}
