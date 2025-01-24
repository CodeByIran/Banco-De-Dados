const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./Usuario');
const Evento = require('./Evento');

const UsuarioEvento = sequelize.define('UsuarioEvento', {
  FK_Usuario_Id_Usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Usuario,
      key: 'Id_Usuario'
    }
  },
  FK_Evento_Id_Evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Evento,
      key: 'Id_Evento'
    }
  }
}, {
  timestamps: false
});

Usuario.belongsToMany(Evento, { through: UsuarioEvento, foreignKey: 'FK_Usuario_Id_Usuario' });
Evento.belongsToMany(Usuario, { through: UsuarioEvento, foreignKey: 'FK_Evento_Id_Evento' });

module.exports = UsuarioEvento;
