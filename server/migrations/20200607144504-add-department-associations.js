module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.addColumn(
        'departments',
        'facultyId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'faculties',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'departments',
        'managerId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction }
      )
    } catch (error) {
      await transaction.rollback()
      throw err
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn('departments', 'facultyId', {
        transaction,
      })
      await queryInterface.removeColumn('departments', 'managerId', {
        transaction,
      })
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },
}
