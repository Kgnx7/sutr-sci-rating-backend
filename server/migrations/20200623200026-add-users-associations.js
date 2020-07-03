'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'users',
          'accessGroupId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'accessgroups',
              key: 'id',
              as: 'accessGroup',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'users',
          'academicRankId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'academicranks',
              key: 'id',
              as: 'academicRank',
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
        queryInterface.removeColumn('users', 'accessGroupId', {
          transaction: t,
        }),
        queryInterface.removeColumn('users', 'academicRankId', {
          transaction: t,
        }),
      ])
    })
  },
}
