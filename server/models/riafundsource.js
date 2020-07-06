'use strict';
module.exports = (sequelize, DataTypes) => {
  const RiaFundSource = sequelize.define('RiaFundSource', {
    title: DataTypes.STRING
  }, {});
  RiaFundSource.associate = function(models) {
    // associations can be defined here
  };
  return RiaFundSource;
};