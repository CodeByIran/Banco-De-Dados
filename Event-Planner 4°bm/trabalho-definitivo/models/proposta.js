const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Proposta = sequelize.define('Proposta', {
  Id_Proposta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  Status: {
    type: DataTypes.STRING(50),
  },
  Data: {
    type: DataTypes.DATEONLY,
  },
  FK_Id_Fornecedor: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Fornecedor',
      key: 'Id_Fornecedor',
    },
  },
}, {
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, // Cria as colunas createdAt e updatedAt automaticamente
});

module.exports = Proposta;