module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.addColumn(
        'faculties',
        'deanId',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'faculties',
        'assistantDeanId',
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
      await queryInterface.removeColumn('faculties', 'deanId', {
        transaction,
      })
      await queryInterface.removeColumn('faculties', 'assistantDeanId', {
        transaction,
      })
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },
}
