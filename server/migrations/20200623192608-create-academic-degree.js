'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('academicdegrees', {
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      degreeTypeId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      specialtyId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('academicdegrees')
  },
}
