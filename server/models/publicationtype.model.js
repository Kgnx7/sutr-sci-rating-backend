'use strict'
module.exports = (sequelize, DataTypes) => {
  const PublicationType = sequelize.define(
    'PublicationType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  PublicationType.associate = function (models) {
    // associations can be defined here
  }
  return PublicationType
}
