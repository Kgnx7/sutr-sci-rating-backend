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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patronymic: {
        type: DataTypes.STRING,
      },
      academicRankId: {
        type: DataTypes.INTEGER,
      },
      accessGroupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      snils: {
        type: DataTypes.INTEGER,
      },
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

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
  })

  User.beforeUpdate((user) => {
    if (user.password) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
      )
    }
  })

  User.associate = function (models) {
    User.belongsTo(models.AccessGroup, {
      as: 'accessGroup',
      foreignKey: 'accessGroupId',
    })
    User.belongsTo(models.AcademicRank, {
      as: 'academicRank',
      foreignKey: 'academicRankId',
    })

    User.belongsToMany(models.Ria, {
      as: 'ria',
      through: 'RiaAuthors',
      foreignKey: 'userId',
      otherKey: 'riaId',
    })
  }
  return User
}
