'use strict';
module.exports = (sequelize, DataTypes) => {
  const RiaTypeProperty = sequelize.define('RiaTypeProperty', {
    title: DataTypes.STRING
  }, {});
  RiaTypeProperty.associate = function(models) {
    // associations can be defined here
  };
  return RiaTypeProperty;
};