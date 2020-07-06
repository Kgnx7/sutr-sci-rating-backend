'use strict'
module.exports = (sequelize, DataTypes) => {
  const Ria = sequelize.define(
    'Ria',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authors: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  Ria.associate = function (models) {
    Ria.belongsTo(models.RiaType, {
      as: 'riaType',
      foreignKey: 'riaTypeId',
    })
    Ria.belongsTo(models.RsType, {
      as: 'rsType',
      foreignKey: 'rsTypeId',
    })
    Ria.belongsTo(models.RiaStatus, {
      as: 'riaStatus',
      foreignKey: 'riaStatusId',
    })

    Ria.belongsToMany(models.User, {
      as: 'users',
      through: 'RiaAuthors',
      foreignKey: 'riaId',
      otherKey: 'userId',
    })
  }
  return Ria
}
