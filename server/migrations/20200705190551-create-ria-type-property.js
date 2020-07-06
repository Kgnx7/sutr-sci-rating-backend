'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RiaTypeProperties', {
      typeId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      propertyId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('RiaTypeProperties')
  },
}
