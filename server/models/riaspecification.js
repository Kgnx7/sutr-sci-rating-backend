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
    // associations can be defined here
  }
  return RiaSpecification
}
