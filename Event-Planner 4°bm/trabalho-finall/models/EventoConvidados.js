const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Evento = require('./Evento');
const Convidados = require('./Convidados');

const EventoConvidados = sequelize.define('EventoConvidados', {
    FK_Evento_Id_Evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Eventos',
        key: 'Id_Evento',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    FK_Convidados_Id_Convidado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Convidados',
        key: 'Id_Convidado',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  }, {
    tableName: 'EventoConvidados',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['FK_Evento_Id_Evento', 'FK_Convidados_Id_Convidado'],
        name: 'evento_convidados_unique', // Nome curto e descritivo
      },
    ],
  });

Evento.belongsToMany(Convidados, { through: EventoConvidados, foreignKey: 'FK_Evento_Id_Evento' });
Convidados.belongsToMany(Evento, { through: EventoConvidados, foreignKey: 'FK_Convidados_Id_Convidado' });

module.exports = EventoConvidados;
