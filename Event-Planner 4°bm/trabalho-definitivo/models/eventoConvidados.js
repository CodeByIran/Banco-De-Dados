const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const EventoConvidados = sequelize.define('EventoConvidados', {
  FK_Evento_Id_Evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Evento',
      key: 'Id_Evento',
    },
  },
  FK_Convidados_Id_Convidado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Convidados',
      key: 'Id_Convidado',
    },
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['FK_Evento_Id_Evento', 'FK_Convidados_Id_Convidado'],
      name: 'evento_convidado_unique', // Nome personalizado para a constraint de unicidade
    },
  ],
},{
  freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
  timestamps: true, // Cria as colunas createdAt e updatedAt automaticamente
});

module.exports = EventoConvidados;
