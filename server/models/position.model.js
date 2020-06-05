'use strict'
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    'Position',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      short: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  Position.associate = function (models) {
    // Position.hasMany(models.User, {
    //   foreignKey: 'position',
    //   sourceKey: 'id',
    // })
  }
  return Position
}
