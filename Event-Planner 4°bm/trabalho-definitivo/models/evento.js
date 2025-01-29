const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Evento = sequelize.define('Evento', {
  Id_Evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Data: {
    type: DataTypes.DATEONLY,
  },
  Local: {
    type: DataTypes.STRING(100),
  },
  Descricao: {
    type: DataTypes.TEXT,
  },
  Orçamento: {
    type: DataTypes.DECIMAL(10, 2),
  },
  FK_Id_Usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuario',
      key: 'Id_Usuario',
    },
  },
}, {
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, // Cria as colunas createdAt e updatedAt automaticamente
});

module.exports = Evento;