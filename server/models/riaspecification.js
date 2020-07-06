'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaSpecification = sequelize.define(
    'RiaSpecification',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dataType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )

  RiaSpecification.associate = function (models) {
    RiaSpecification.belongsToMany(models.RiaType, {
      as: 'riaTypes',
      through: 'RiaTypeProperties',
      foreignKey: 'propertyId',
      otherKey: 'typeId',
    })

    RiaSpecification.belongsToMany(models.Ria, {
      as: 'ria',
      through: 'RiaProperties',
      foreignKey: 'propertyId',
      otherKey: 'riaId',
    })
  }
  return RiaSpecification
}
