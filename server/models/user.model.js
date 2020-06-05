'use strict'
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accessGroupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patronymic: {
        type: DataTypes.STRING,
      },
      departmentId: {
        type: DataTypes.INTEGER,
        // allowNull: false
      },
      positionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      academicDegreeId: {
        type: DataTypes.INTEGER,
        // allowNull: false
      },
      academicRankId: {
        type: DataTypes.INTEGER,
        // allowNull: false
      },
      staffId: {
        type: DataTypes.INTEGER,
        // allowNull: false
      },
      salaryRate: {
        type: DataTypes.FLOAT,
        // allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      yearOfBirth: {
        type: DataTypes.INTEGER,
      },
      // SNILS4ID: {
      //   type: DataTypes.BIGINT,
      // },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['login'],
        },
      ],
    }
  )

  User.associate = (models) => {
    User.belongsTo(models.Position, {
      foreignKey: 'positionId',
      targetKey: 'id',
      as: 'position',
    })

    User.belongsTo(models.Department, {
      foreignKey: 'departmentId',
      targetKey: 'id',
      as: 'department',
    })

    User.belongsTo(models.AccessGroup, {
      foreignKey: 'accessGroupId',
      targetKey: 'id',
      as: 'accessGroup',
    })

    User.belongsTo(models.AcademicDegree, {
      foreignKey: 'academicDegreeId',
      targetKey: 'id',
      as: 'academicDegree',
    })

    User.belongsTo(models.AcademicRank, {
      foreignKey: 'academicRankId',
      targetKey: 'id',
      as: 'academicRank',
    })

    User.belongsTo(models.Staff, {
      foreignKey: 'staffId',
      targetKey: 'id',
      as: 'staff',
    })
  }

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
  })

  return User
}
