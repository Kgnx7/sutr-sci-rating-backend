'use strict'
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    'Position',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      short: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['title', 'short'],
        },
      ],
    }
  )
  Position.associate = function (models) {}
  return Position
}
