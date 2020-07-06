'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaStatus = sequelize.define(
    'RiaStatus',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {}
  )
  RiaStatus.associate = function (models) {
    // associations can be defined here
  }
  return RiaStatus
}
