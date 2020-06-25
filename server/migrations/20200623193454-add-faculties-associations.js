'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'faculties',
          'deanId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
              as: 'dean',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'faculties',
          'deanAssistantId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
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
        queryInterface.removeColumn('faculties', 'deanId', { transaction: t }),
        queryInterface.removeColumn('faculties', 'deanAssistantId', {
          transaction: t,
        }),
      ])
    })
  },
}
