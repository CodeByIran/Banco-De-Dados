'use strict';
/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Evento', {
      Id_Evento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Data: {
        type: Sequelize.DATE,
      },
      Local: {
        type: Sequelize.STRING,
      },
      Descricao: {
        type: Sequelize.TEXT,
      },
      Orçamento: {
        type: Sequelize.DECIMAL(10, 2),
      },
      FK_Id_Usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuario',
          key: 'Id_Usuario',
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
    await queryInterface.dropTable('Evento');
  },
};
