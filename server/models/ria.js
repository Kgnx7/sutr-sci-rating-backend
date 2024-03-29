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
      riaTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rsTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      riaStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

    Ria.belongsToMany(models.RiaSpecification, {
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

    Ria.belongsToMany(models.Document, {
      as: 'documents',
      through: 'RiaDocuments',
      foreignKey: 'riaId',
      otherKey: 'documentId',
    })
  }
  return Ria
}
