const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'EventoDB', // Nome do banco
  
  'aluno.ifal',     // Usuário do banco
  'aluno.ifal',    // Senha do banco

  // 'root',     // Usuário do banco
  // 'iran',    // Senha do banco

  {
    host: 'localhost', // Host
    dialect: 'mysql',  // Dialeto usado
  }
);

module.exports = sequelize;