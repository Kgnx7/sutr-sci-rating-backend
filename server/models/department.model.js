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
      facultyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      managerId: {
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
    Department.belongsTo(models.User, {
      foreignKey: 'managerId',
      sourceKey: 'id',
      as: 'manager',
    })

    Department.belongsTo(models.Faculty, {
      foreignKey: 'facultyId',
      sourceKey: 'id',
      as: 'faculty',
    })
  }

  return Department
}
