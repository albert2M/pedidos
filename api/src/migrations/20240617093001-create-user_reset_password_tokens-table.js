'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_reset_password_tokens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      token: {
        type: Sequelize.STRING,
        allowNull: false
      },
      expirationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      used: {
        type: Sequelize.BOOLEAN,
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

    await queryInterface.addIndex('user_reset_password_tokens', ['userId'], {
      name: 'user_reset_password_tokens_userId_index'
    }) 

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_reset_password_tokens')
  }
}

// para lanzar o borrar ablas "migraciones": https://sequelize.org/docs/v6/other-topics/migrations/