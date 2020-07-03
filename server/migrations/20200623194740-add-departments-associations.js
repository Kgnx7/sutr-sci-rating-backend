'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Departments',
          'managerId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id',
              as: 'manager',
            },
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Departments',
          'facultyId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Faculties',
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
        queryInterface.removeColumn('Departments', 'managerId', {
          transaction: t,
        }),
        queryInterface.removeColumn('Departments', 'facultyId', {
          transaction: t,
        }),
      ])
    })
  },
}
