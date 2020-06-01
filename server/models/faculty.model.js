'use strict'
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define(
    'Faculty',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      short: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dean: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AssistantDean: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  Faculty.associate = function (models) {
    // associations can be defined here
  }
  return Faculty
}
