'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.addColumn(
        'ridkinds',
        'ridTypeId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'ridtypes',
            key: 'id',
          },
        },
        { transaction }
      )
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.removeColumn('ridkinds', 'ridTypeId', {
        transaction,
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
}
