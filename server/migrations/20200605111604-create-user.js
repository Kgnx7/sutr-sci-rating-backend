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
        accessGroupId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'accessgroups',
            key: 'id',
          },
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
          // allowNull: false
        },
        departmentId: {
          type: Sequelize.INTEGER,
          // allowNull: false,
          references: {
            model: 'departments',
            key: 'id',
          },
        },
        positionId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'positions',
            key: 'id',
          },
        },
        academicDegreeId: {
          type: Sequelize.INTEGER,
          // allowNull: false
          references: {
            model: 'academicdegrees',
            key: 'id',
          },
        },
        academicRankId: {
          type: Sequelize.INTEGER,
          // allowNull: false
          references: {
            model: 'academicranks',
            key: 'id',
          },
        },
        staffId: {
          type: Sequelize.INTEGER,
          // allowNull: false
          references: {
            model: 'staffs',
            key: 'id',
          },
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
        // SNILS4ID: {
        //   type: Sequelize.BIGINT,
        //   references: {
        //     model: 'academicranks',
        //     key: 'id',
        //   },
        // },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  },
}
