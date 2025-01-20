'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarefa', {
      Id_Tarefa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Descricao: {
        type: Sequelize.TEXT,
      },
      Status: {
        type: Sequelize.STRING,
      },
      Prazo_Inicial: {
        type: Sequelize.DATE,
      },
      Prazo_Final: {
        type: Sequelize.DATE,
      },
      FK_Id_Evento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Evento',
          key: 'Id_Evento',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarefa');
  },
};