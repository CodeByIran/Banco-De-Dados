const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const UsuarioEvento = sequelize.define('UsuarioEvento', {
  FK_Usuario_Id_Usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Usuario',
      key: 'Id_Usuario',
    },
  },
  FK_Evento_Id_Evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Evento',
      key: 'Id_Evento',
    },
  },
}, {
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['FK_Usuario_Id_Usuario', 'FK_Evento_Id_Evento'],
      name: 'usuario_evento_unique',
    },
  ],
},{
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, // false remove as colunas createdAt e updatedAt automaticamente
});

module.exports = UsuarioEvento;
