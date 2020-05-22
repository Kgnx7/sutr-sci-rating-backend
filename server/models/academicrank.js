'use strict';
module.exports = (sequelize, DataTypes) => {
  const AcademicRank = sequelize.define('AcademicRank', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  AcademicRank.associate = function(models) {
    // associations can be defined here
  };
  return AcademicRank;
};