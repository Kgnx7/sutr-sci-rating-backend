'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'positions',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        short: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          unique_tag: {
            customIndex: true,
            fields: ['title', 'short'],
          },
        },
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('positions')
  },
}
