'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RiaStates', {
      riaId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stateId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stateChangeDate: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('RiaStates')
  },
}
