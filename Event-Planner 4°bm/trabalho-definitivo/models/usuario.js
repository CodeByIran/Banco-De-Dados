const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Usuario = sequelize.define('Usuario', {
  Id_Usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Cargo: {
    type: DataTypes.STRING,
  },
  Empresa: {
    type: DataTypes.STRING,
  },
});

module.exports = Usuario;
