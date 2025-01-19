const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./Usuario');
const Tarefa = require('./Tarefa');

const UsuarioTarefa = sequelize.define('UsuarioTarefa', {
  FK_Usuario_Id_Usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Usuario,
      key: 'Id_Usuario'
    }
  },
  FK_Tarefa_Id_Tarefa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tarefa,
      key: 'Id_Tarefa'
    }
  }
}, {
  timestamps: false
});

Usuario.belongsToMany(Tarefa, { through: UsuarioTarefa, foreignKey: 'FK_Usuario_Id_Usuario' });
Tarefa.belongsToMany(Usuario, { through: UsuarioTarefa, foreignKey: 'FK_Tarefa_Id_Tarefa' });

module.exports = UsuarioTarefa;
