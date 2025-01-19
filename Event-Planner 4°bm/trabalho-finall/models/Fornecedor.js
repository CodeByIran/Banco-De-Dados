const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Fornecedor = sequelize.define('Fornecedor', {
  Id_Fornecedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Servico: {
    type: DataTypes.STRING
  },
  Disponibilidade: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

module.exports = Fornecedor;
