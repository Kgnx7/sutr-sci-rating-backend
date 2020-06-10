'use strict'
module.exports = (sequelize, DataTypes) => {
  const NirStatus = sequelize.define(
    'NirStatus',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  nirStatus.associate = function (models) {
    // associations can be defined here
  }
  return nirStatus
}
