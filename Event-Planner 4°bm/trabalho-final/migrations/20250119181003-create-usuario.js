'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      Id_Usuario: { // Corrigido para refletir o nome da coluna original
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false // Adicionada restrição NOT NULL
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false, // Adicionada restrição NOT NULL
        unique: true // Adicionada restrição UNIQUE
      },
      Cargo: {
        type: Sequelize.STRING
      },
      Empresa: {
        type: Sequelize.STRING
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};