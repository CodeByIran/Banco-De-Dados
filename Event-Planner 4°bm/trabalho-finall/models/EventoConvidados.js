const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Evento = require('./Evento');
const Convidados = require('./Convidados');

const EventoConvidados = sequelize.define('EventoConvidados', {
  FK_Evento_Id_Evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Evento,
      key: 'Id_Evento'
    }
  },
  FK_Convidados_Id_Convidado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Convidados,
      key: 'Id_Convidado'
    }
  }
}, {
  timestamps: false
});

Evento.belongsToMany(Convidados, { through: EventoConvidados, foreignKey: 'FK_Evento_Id_Evento' });
Convidados.belongsToMany(Evento, { through: EventoConvidados, foreignKey: 'FK_Convidados_Id_Convidado' });

module.exports = EventoConvidados;
