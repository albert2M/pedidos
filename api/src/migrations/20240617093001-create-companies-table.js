'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      commercialName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fiscallName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      commercialAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fiscalAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vatNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('companies')
  }
}

// para lanzar o borrar ablas "migraciones": https://sequelize.org/docs/v6/other-topics/migrations/
// Tipos de datos: https://sequelize.org/docs/v7/models/data-types/