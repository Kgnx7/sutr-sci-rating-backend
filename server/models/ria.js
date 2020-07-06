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

    Ria.belongsToMany(models.RiaSpecification, {
      as: 'users',
      through: 'RiaAuthors',
      foreignKey: 'riaId',
      otherKey: 'userId',
    })

    Ria.belongsToMany(models.User, {
      as: 'properties',
      through: 'RiaProperties',
      foreignKey: 'riaId',
      otherKey: 'propertyId',
    })

    Ria.belongsToMany(models.RsState, {
      as: 'states',
      through: 'RiaStates',
      foreignKey: 'riaId',
      otherKey: 'stateId',
    })

    Ria.belongsToMany(models.FundSource, {
      as: 'fundSources',
      through: 'RiaFundSources',
      foreignKey: 'riaId',
      otherKey: 'fundSourceId',
    })
  }
  return Ria
}
