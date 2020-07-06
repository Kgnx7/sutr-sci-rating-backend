'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaAuthor = sequelize.define(
    'RiaAuthor',
    {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      riaId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  RiaAuthor.associate = function (models) {
    // associations can be defined here
  }
  return RiaAuthor
}
