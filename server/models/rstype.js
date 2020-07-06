'use strict'
module.exports = (sequelize, DataTypes) => {
  const RsType = sequelize.define(
    'RsType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {}
  )
  RsType.associate = function (models) {
    // associations can be defined here
  }
  return RsType
}
