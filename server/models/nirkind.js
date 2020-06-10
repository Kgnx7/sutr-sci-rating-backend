'use strict'
module.exports = (sequelize, DataTypes) => {
  const nirKind = sequelize.define(
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
