'use strict'
module.exports = (sequelize, DataTypes) => {
  const RIDAuthor = sequelize.define(
    'RidAuthor',
    {
      authorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      ridId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      part: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )

  RIDAuthor.associate = function (models) {
    // associations can be defined here
  }
  return RIDAuthor
}
