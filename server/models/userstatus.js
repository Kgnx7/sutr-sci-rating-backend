'use strict'
module.exports = (sequelize, DataTypes) => {
  const UserStatus = sequelize.define(
    'UserStatus',
    {
      userId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departmentId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      positionId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      employmentTypeId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      salaryRate: {
        type: DataTypes.FLOAT,
      },
    },
    {}
  )
  UserStatus.associate = function (models) {
    UserStatus.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
    UserStatus.belongsTo(models.Position, {
      foreignKey: 'positionId',
      as: 'position',
    })
    UserStatus.belongsTo(models.Department, {
      foreignKey: 'departmentId',
      as: 'department',
    })
    UserStatus.belongsTo(models.EmploymentType, {
      foreignKey: 'departmentId',
      as: 'employmentType',
    })
  }
  return UserStatus
}
