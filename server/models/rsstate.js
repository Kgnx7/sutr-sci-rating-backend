'use strict'
module.exports = (sequelize, DataTypes) => {
  const RsState = sequelize.define(
    'RsState',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  )
  RsState.associate = function (models) {
    RsState.belongsToMany(models.Ria, {
      as: 'ria',
      through: 'RiaStates',
      foreignKey: 'stateId',
      otherKey: 'riaId',
    })
  }
  return RsState
}
