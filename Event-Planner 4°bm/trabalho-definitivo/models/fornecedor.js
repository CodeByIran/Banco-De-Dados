const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Fornecedor = sequelize.define('Fornecedor', {
  Id_Fornecedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  Servico: {
    type: DataTypes.STRING(100),
  },
  Disponibilidade: {
    type: DataTypes.STRING(50),
  },
}, {
  timestamps: false,
});

module.exports = Fornecedor;