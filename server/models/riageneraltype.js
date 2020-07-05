'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaGeneralType = sequelize.define(
    'RiaGeneralType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      note: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  RiaGeneralType.associate = function (models) {
    // associations can be defined here
  }
  return RiaGeneralType
}
