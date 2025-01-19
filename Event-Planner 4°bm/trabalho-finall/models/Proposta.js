const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Fornecedor = require('./Fornecedor');

const Proposta = sequelize.define('Proposta', {
  Id_Proposta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  Status: {
    type: DataTypes.STRING
  },
  Data: {
    type: DataTypes.DATE
  }
}, {
  timestamps: false
});

Proposta.belongsTo(Fornecedor, { foreignKey: 'FK_Id_Fornecedor' });
Fornecedor.hasMany(Proposta, { foreignKey: 'FK_Id_Fornecedor' });

module.exports = Proposta;
