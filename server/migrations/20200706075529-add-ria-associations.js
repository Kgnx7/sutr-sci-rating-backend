'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Ria',
          'riaTypeId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'RiaTypes',
              key: 'id',
              as: 'riaType',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Ria',
          'rsTypeId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'RsTypes',
              key: 'id',
              as: 'rsType',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Ria',
          'riaStatusId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'RiaStatuses',
              key: 'id',
              as: 'riaStatus',
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
        queryInterface.removeColumn('Ria', 'riaTypeId', {
          transaction: t,
        }),
        queryInterface.removeColumn('Ria', 'rsTypeId', {
          transaction: t,
        }),
        queryInterface.removeColumn('Ria', 'riaStatusId', {
          transaction: t,
        }),
      ])
    })
  },
}
