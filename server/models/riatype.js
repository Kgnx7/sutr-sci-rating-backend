'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaType = sequelize.define(
    'RiaType',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      perUnit: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  )

  RiaType.associate = function (models) {
    RiaType.belongsTo(models.RiaGeneralType, {
      as: 'generalType',
      foreignKey: 'generalTypeId',
    })

    RiaType.belongsToMany(models.RiaSpecification, {
      as: 'typeProperties',
      through: 'RiaTypeProperties',
      foreignKey: 'typeId',
      otherKey: 'propertyId',
    })
  }
  return RiaType
}
