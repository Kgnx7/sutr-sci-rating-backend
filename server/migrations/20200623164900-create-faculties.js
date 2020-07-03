'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Faculties',
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

        address: { type: Sequelize.STRING },
        phone: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },

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
    return queryInterface.dropTable('Faculties')
  },
}
