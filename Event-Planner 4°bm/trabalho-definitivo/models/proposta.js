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
});

module.exports = Proposta;