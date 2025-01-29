const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Tarefa = sequelize.define('Tarefa', {
  Id_Tarefa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Descricao: {
    type: DataTypes.TEXT,
  },
  Status: {
    type: DataTypes.STRING(50),
  },
  Prazo_Inicial: {
    type: DataTypes.DATEONLY,
  },
  Prazo_Final: {
    type: DataTypes.DATEONLY,
  },
  FK_Id_Evento: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Evento',
      key: 'Id_Evento',
    },
  },
}, {
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, // Cria as colunas createdAt e updatedAt automaticamente
});

module.exports = Tarefa;