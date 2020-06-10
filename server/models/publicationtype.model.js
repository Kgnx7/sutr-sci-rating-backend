'use strict'
module.exports = (sequelize, DataTypes) => {
  const publicationType = sequelize.define(
    'PublicationType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  publicationType.associate = function (models) {
    // associations can be defined here
  }
  return publicationType
}
