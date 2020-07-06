'use strict'
module.exports = (sequelize, DataTypes) => {
  const RiaDocument = sequelize.define(
    'RiaDocument',
    {
      riaId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      documentId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {}
  )
  RiaDocument.associate = function (models) {
    // associations can be defined here
  }
  return RiaDocument
}
