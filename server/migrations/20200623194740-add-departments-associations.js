'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'departments',
          'managerId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
              as: 'manager',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'departments',
          'facultyId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'faculties',
              key: 'id',
              as: 'faculty',
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
        queryInterface.removeColumn('departments', 'managerId', {
          transaction: t,
        }),
        queryInterface.removeColumn('departments', 'facultyId', {
          transaction: t,
        }),
      ])
    })
  },
}
