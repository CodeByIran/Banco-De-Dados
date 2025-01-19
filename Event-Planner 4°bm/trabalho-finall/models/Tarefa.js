const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Evento = require('./Evento');

const Tarefa = sequelize.define('Tarefa', {
  Id_Tarefa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Descricao: {
    type: DataTypes.TEXT
  },
  Status: {
    type: DataTypes.STRING
  },
  Prazo_Inicial: {
    type: DataTypes.DATE
  },
  Prazo_Final: {
    type: DataTypes.DATE
  }
}, {
  timestamps: false
});

Tarefa.belongsTo(Evento, { foreignKey: 'FK_Id_Evento' });
Evento.hasMany(Tarefa, { foreignKey: 'FK_Id_Evento' });

module.exports = Tarefa;
