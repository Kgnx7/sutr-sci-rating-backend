'use strict'
module.exports = (sequelize, DataTypes) => {
  const rsType = sequelize.define(
    'rsType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {}
  )
  rsType.associate = function (models) {
    // associations can be defined here
  }
  return rsType
}
