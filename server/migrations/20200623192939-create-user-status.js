'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserStatuses', {
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departmentId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      positionId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      employmentTypeId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      salaryRate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserStatuses')
  },
}
