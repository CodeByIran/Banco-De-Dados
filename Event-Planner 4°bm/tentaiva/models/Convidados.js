const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Convidados = sequelize.define('Convidados', {
  Id_Convidado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Papel: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

module.exports = Convidados;
