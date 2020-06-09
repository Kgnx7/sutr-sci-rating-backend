'use strict'
module.exports = (sequelize, DataTypes) => {
  const RidFile = sequelize.define(
    'RidFile',
    {
      filePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ridId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  )
  RidFile.associate = function (models) {
    // associations can be defined here
  }
  return RidFile
}
