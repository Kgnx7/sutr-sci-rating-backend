'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        surname: {
          type: Sequelize.STRING,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        patronymic: {
          type: Sequelize.STRING,
          // allowNull: false
        },
        department: {
          type: Sequelize.INTEGER,
          // allowNull: false,
        },
        position: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        academicDegree: {
          type: Sequelize.INTEGER,
          // allowNull: false
        },
        academicRank: {
          type: Sequelize.INTEGER,
          // allowNull: false
        },
        staff: {
          type: Sequelize.INTEGER,
          // allowNull: false
        },
        salaryRate: {
          type: Sequelize.FLOAT,
          // allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
        },
        mail: {
          type: Sequelize.STRING,
        },
        yearOfBirth: {
          type: Sequelize.INTEGER,
        },
        SNILS4: {
          type: Sequelize.BIGINT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

      await queryInterface.addIndex(
        'Users',
        {
          fields: ['login'],
          unique: true,
          transaction,
        }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};