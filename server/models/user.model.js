'use strict';
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    patronymic: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    academicDegree: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    academicRank: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    staff: {
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
    SNILS4: {
      type: DataTypes.BIGINT
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['login']
      }
    ]
  });

  User.associate = (models) => {
    // associations
  };

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};