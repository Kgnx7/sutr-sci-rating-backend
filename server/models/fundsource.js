'use strict'
module.exports = (sequelize, DataTypes) => {
  const FundSource = sequelize.define(
    'FundSource',
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
      note: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  FundSource.associate = function (models) {
    FundSource.belongsToMany(models.Ria, {
      as: 'ria',
      through: 'RiaFundSources',
      foreignKey: 'fundSourceId',
      otherKey: 'riaId',
    })
  }
  return FundSource
}
