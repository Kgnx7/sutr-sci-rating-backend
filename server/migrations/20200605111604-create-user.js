'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        surname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        patronymic: {
          type: Sequelize.STRING,
        },
        salaryRate: {
          type: Sequelize.FLOAT,
          // allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        yearOfBirth: {
          type: Sequelize.INTEGER,
        },
        snils: {
          type: Sequelize.INTEGER,
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

      await queryInterface.addIndex('users', {
        fields: ['login'],
        unique: true,
        transaction,
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  },
}
