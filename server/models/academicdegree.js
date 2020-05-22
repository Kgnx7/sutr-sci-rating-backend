'use strict';
module.exports = (sequelize, DataTypes) => {
  const academicDegree = sequelize.define('academicDegree', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  academicDegree.associate = function(models) {
    // associations can be defined here
  };
  return academicDegree;
};