'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Users',
          'accessGroupId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'AccessGroups',
              key: 'id',
              as: 'accessGroup',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Users',
          'academicRankId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'AcademicRanks',
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
        queryInterface.removeColumn('Users', 'accessGroupId', {
          transaction: t,
        }),
        queryInterface.removeColumn('Users', 'academicRankId', {
          transaction: t,
        }),
      ])
    })
  },
}
