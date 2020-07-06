'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ria = sequelize.define('Ria', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {});
  Ria.associate = function(models) {
    // associations can be defined here
  };
  return Ria;
};