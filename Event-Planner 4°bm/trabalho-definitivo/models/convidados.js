const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Convidados = sequelize.define('Convidados', {
  Id_Convidado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Papel: {
    type: DataTypes.STRING(50),
  },
}, {
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, //  false remove as colunas createdAt e updatedAt automaticamente
});

module.exports = Convidados;