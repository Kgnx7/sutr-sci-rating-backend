'use strict'
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    'Department',
    {
      short: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      faculty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      manager: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
    },
    {}
  )
  Department.associate = (models) => {
    // associations
  }
  return Department
}
