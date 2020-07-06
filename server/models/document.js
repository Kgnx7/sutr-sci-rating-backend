'use strict'
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define(
    'Document',
    {
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  )
  Document.associate = function (models) {
    Document.belongsToMany(models.Ria, {
      as: 'documents',
      through: 'RiaDocuments',
      foreignKey: 'documentId',
      otherKey: 'riaId',
    })
  }
  return Document
}
