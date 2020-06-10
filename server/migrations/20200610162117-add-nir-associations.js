'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.addColumn(
        'nirs',
        'typeId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'ridtypes',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'ridKindId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'ridkinds',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'createdById',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'checkedById',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'nirKindId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'ridkinds',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'fundSourceId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'fundsources',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'leaderId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'nirStatusId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'nirstatuses',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'publicationTypeId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'publicationtypes',
            key: 'id',
          },
        },
        { transaction }
      )
      await queryInterface.addColumn(
        'nirs',
        'statusId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'statuses',
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
      await queryInterface.removeColumn('nirs', 'typeId', { transaction })
      await queryInterface.removeColumn('nirs', 'ridKindId', { transaction })
      await queryInterface.removeColumn('nirs', 'createdById', { transaction })
      await queryInterface.removeColumn('nirs', 'checkedById', { transaction })
      await queryInterface.removeColumn('nirs', 'nirKindId', { transaction })
      await queryInterface.removeColumn('nirs', 'fundSourceId', { transaction })
      await queryInterface.removeColumn('nirs', 'leaderId', { transaction })
      await queryInterface.removeColumn('nirs', 'nirStatusId', { transaction })
      await queryInterface.removeColumn('nirs', 'statusId', { transaction })
      await queryInterface.removeColumn('nirs', 'publicationTypeId', {
        transaction,
      })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
}
