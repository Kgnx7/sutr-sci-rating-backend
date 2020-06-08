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
      deanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      assistantDeanId: {
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
    Faculty.belongsTo(models.User, {
      foreignKey: 'deanId',
      targetKey: 'id',
      as: 'dean',
    })

    Faculty.belongsTo(models.User, {
      foreignKey: 'assistantDeanId',
      targetKey: 'id',
      as: 'assistantDean',
    })
  }
  return Faculty
}
