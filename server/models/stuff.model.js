'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stuff = sequelize.define('Stuff', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Stuff.associate = function (models) {
    // associations can be defined here
  };
  return Stuff;
};