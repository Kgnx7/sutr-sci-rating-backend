'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('nirs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      authors: {
        type: Sequelize.STRING,
      },
      sourceName: {
        type: Sequelize.STRING,
      },
      sourceId: {
        type: Sequelize.INTEGER,
      },
      pages: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      remText: {
        type: Sequelize.STRING,
      },
      remValue: {
        type: Sequelize.FLOAT,
      },
      remValue: {
        type: Sequelize.FLOAT,
      },
      checkDate: {
        type: Sequelize.DATE,
      },
      customer: {
        type: Sequelize.STRING,
      },
      contract: {
        type: Sequelize.STRING,
      },
      contractDate: {
        type: Sequelize.DATE,
      },
      contractValue: {
        type: Sequelize.FLOAT,
      },
      paidValue: {
        type: Sequelize.FLOAT,
      },
      actValue: {
        type: Sequelize.FLOAT,
      },
      actDate: {
        type: Sequelize.DATE,
      },
      nirCipher: {
        type: Sequelize.STRING,
      },
      srsti: {
        type: Sequelize.STRING,
      },
      udc: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      isbn: {
        type: Sequelize.STRING,
      },
      issn: {
        type: Sequelize.STRING,
      },
      doi: {
        type: Sequelize.STRING,
      },
      wos: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      scopus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      rsci: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      hac: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      rsci: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      wosId: {
        type: Sequelize.STRING,
      },
      scopusId: {
        type: Sequelize.STRING,
      },
      elibraryId: {
        type: Sequelize.STRING,
      },
      quartileWos: {
        type: Sequelize.INTEGER,
      },
      quartileScopus: {
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Nirs')
  },
}
