'use strict';
module.exports = (sequelize, DataTypes) => {
  const Сathedra = sequelize.define('Сathedra', {
    short: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    faculty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manager: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    }
  }, {});
  Сathedra.associate = function (models) {
    // associations can be defined here
  };
  return Сathedra;
};