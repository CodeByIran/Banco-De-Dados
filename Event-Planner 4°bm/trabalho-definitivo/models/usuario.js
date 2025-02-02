const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Usuario = sequelize.define('Usuario', {
  Id_Usuario: {
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
  Cargo: {
    type: DataTypes.STRING(50),
  },
  Empresa: {
    type: DataTypes.STRING(100),
  },

},
{
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, //  false remove as colunas createdAt e updatedAt automaticamente
});

module.exports = Usuario;
