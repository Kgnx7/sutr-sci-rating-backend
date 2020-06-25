'use strict'
module.exports = (sequelize, DataTypes) => {
  const Faculty = sequelize.define(
    'Faculty',
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
      deanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deanAssistantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
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
  Faculty.associate = function (models) {
    Faculty.belongsTo(models.User, {
      as: 'dean',
      foreignKey: 'deanId',
    })
    Faculty.belongsTo(models.User, {
      as: 'deanAssistant',
      foreignKey: 'deanAssistantId',
    })
  }
  return Faculty
}
