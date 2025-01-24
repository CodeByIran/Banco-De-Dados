'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario', [
      {
        Nome: 'João Silva',
        Email: 'joao@email.com',
        Cargo: 'Gerente',
        Empresa: 'Empresa A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Nome: 'Maria Souza',
        Email: 'maria@email.com',
        Cargo: 'Analista',
        Empresa: 'Empresa B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuario', null, {});
  },
};