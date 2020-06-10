'use strict'
module.exports = (sequelize, DataTypes) => {
  const Nir = sequelize.define(
    'Nir',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authors: {
        type: DataTypes.STRING,
      },
      sourceName: {
        type: DataTypes.STRING,
      },
      sourceId: {
        type: DataTypes.INTEGER,
      },
      pages: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      remText: {
        type: DataTypes.STRING,
      },
      remValue: {
        type: DataTypes.FLOAT,
      },
      remValue: {
        type: DataTypes.FLOAT,
      },
      checkDate: {
        type: DataTypes.DATE,
      },
      customer: {
        type: DataTypes.STRING,
      },
      contract: {
        type: DataTypes.STRING,
      },
      contractDate: {
        type: DataTypes.DATE,
      },
      contractValue: {
        type: DataTypes.FLOAT,
      },
      paidValue: {
        type: DataTypes.FLOAT,
      },
      actValue: {
        type: DataTypes.FLOAT,
      },
      actDate: {
        type: DataTypes.DATE,
      },
      nirCipher: {
        type: DataTypes.STRING,
      },
      srsti: {
        type: DataTypes.STRING,
      },
      udc: {
        type: DataTypes.STRING,
      },
      language: {
        type: DataTypes.STRING,
      },
      language: {
        type: DataTypes.STRING,
      },
      isbn: {
        type: DataTypes.STRING,
      },
      issn: {
        type: DataTypes.STRING,
      },
      doi: {
        type: DataTypes.STRING,
      },
      wos: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      scopus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      rsci: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      hac: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      rsci: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      wosId: {
        type: DataTypes.STRING,
      },
      scopusId: {
        type: DataTypes.STRING,
      },
      elibraryId: {
        type: DataTypes.STRING,
      },
      quartileWos: {
        type: DataTypes.INTEGER,
      },
      quartileScopus: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  )
  Nir.associate = function (models) {
    Nir.belongsTo(models.RidType, {
      foreignKey: 'typeId',
      targetKey: 'id',
      as: 'type',
    })
    Nir.belongsTo(models.RidKind, {
      foreignKey: 'ridKindId',
      targetKey: 'id',
      as: 'ridKind',
    })
    Nir.belongsTo(models.User, {
      foreignKey: 'createdById',
      targetKey: 'id',
      as: 'createdBy',
    })
    Nir.belongsTo(models.User, {
      foreignKey: 'checkedById',
      targetKey: 'id',
      as: 'checkedBy',
    })
    Nir.belongsTo(models.NirKind, {
      foreignKey: 'nirKindId',
      targetKey: 'id',
      as: 'nirKind',
    })
    Nir.belongsTo(models.FundSource, {
      foreignKey: 'fundSourceId',
      targetKey: 'id',
      as: 'fundSource',
    })
    Nir.belongsTo(models.User, {
      foreignKey: 'leaderId',
      targetKey: 'id',
      as: 'leader',
    })
    Nir.belongsTo(models.NirStatus, {
      foreignKey: 'nirStatusId',
      targetKey: 'id',
      as: 'nirStatus',
    })
    Nir.belongsTo(models.PublicationType, {
      foreignKey: 'publicationTypeId',
      targetKey: 'id',
      as: 'publicationType',
    })
    Nir.belongsTo(models.Status, {
      foreignKey: 'statusId',
      targetKey: 'id',
      as: 'status',
    })
    Nir.belongsToMany(models.User, { through: 'ridauthors' })
  }
  return Nir
}
