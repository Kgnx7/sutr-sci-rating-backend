'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'RiaTypes',
          'generalTypeId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'RiaGeneralTypes',
              key: 'id',
              as: 'generalType',
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
        queryInterface.removeColumn('RiaTypes', 'generalTypeId', {
          transaction: t,
        }),
      ])
    })
  },
}
