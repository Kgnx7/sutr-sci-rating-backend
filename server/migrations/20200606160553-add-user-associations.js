module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.addColumn(
        'users',
        'accessGroupId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'accessgroups',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'users',
        'departmentId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'departments',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'users',
        'positionId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'positions',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'users',
        'academicDegreeId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'academicdegrees',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'users',
        'academicRankId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'academicranks',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'users',
        'staffId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'staffs',
            allowNull: false,
            key: 'id',
          },
        },
        { transaction }
      )
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn('users', 'accessGroupId', {
        transaction,
      })
      await queryInterface.removeColumn('users', 'departmentId', {
        transaction,
      })
      await queryInterface.removeColumn('users', 'positionId', {
        transaction,
      })
      await queryInterface.removeColumn('users', 'academicDegreeId', {
        transaction,
      })
      await queryInterface.removeColumn('users', 'academicRankId', {
        transaction,
      })
      await queryInterface.removeColumn('users', 'staffId', {
        transaction,
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
}
