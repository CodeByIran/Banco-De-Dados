const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const UsuarioTarefa = sequelize.define('UsuarioTarefa', {
  FK_Usuario_Id_Usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Usuario',
      key: 'Id_Usuario',
    },
  },
  FK_Tarefa_Id_Tarefa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Tarefa',
      key: 'Id_Tarefa',
    },
  },
}, {
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['FK_Usuario_Id_Usuario', 'FK_Tarefa_Id_Tarefa'],
      name: 'usuario_tarefa_unique',
    },
  ],
},{
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, //  false remove as colunas createdAt e updatedAt automaticamente
});
module.exports = UsuarioTarefa;
