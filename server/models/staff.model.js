'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Staff.associate = function (models) {
    // associations can be defined here
  };
  return Staff;
};