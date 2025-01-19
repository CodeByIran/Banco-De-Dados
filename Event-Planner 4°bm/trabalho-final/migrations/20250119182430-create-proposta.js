'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proposta', {
      Id_Proposta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Valor: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      Status: {
        type: Sequelize.STRING,
      },
      Data: {
        type: Sequelize.DATE,
      },
      FK_Id_Fornecedor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fornecedor',
          key: 'Id_Fornecedor',
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
    await queryInterface.dropTable('Proposta');
  },
};