'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Faculties',
          'deanId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id',
              as: 'dean',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Faculties',
          'deanAssistantId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id',
              as: 'deanAssistant',
            },
          },
          { transaction: t }
        ),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Faculties', 'deanId', { transaction: t }),
        queryInterface.removeColumn('Faculties', 'deanAssistantId', {
          transaction: t,
        }),
      ])
    })
  },
}
