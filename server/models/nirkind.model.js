'use strict'
module.exports = (sequelize, DataTypes) => {
  const NirKind = sequelize.define(
    'NirKind',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  nirKind.associate = function (models) {
    // associations can be defined here
  }
  return nirKind
}
