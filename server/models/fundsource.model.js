'use strict'
module.exports = (sequelize, DataTypes) => {
  const FundSource = sequelize.define(
    'FundSource',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      short: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  FundSource.associate = function (models) {
    // associations can be defined here
  }
  return FundSource
}
