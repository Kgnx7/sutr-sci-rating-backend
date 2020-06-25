'use strict'
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    'Department',
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
      facultyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      managerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['title', 'short'],
        },
      ],
    }
  )
  Department.associate = function (models) {
    Department.belongsTo(models.Faculty, {
      as: 'faculty',
      foreignKey: 'facultyId',
    })
    Department.belongsTo(models.User, {
      as: 'manager',
      foreignKey: 'managerId',
    })
  }
  return Department
}
