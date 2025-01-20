const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('./Usuario');  // Certifique-se de que está corretamente importado

const Evento = sequelize.define('Evento', {
  Id_Evento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Data: {
    type: DataTypes.DATE
  },
  Local: {
    type: DataTypes.STRING
  },
  Descricao: {
    type: DataTypes.TEXT
  },
  Orçamento: {
    type: DataTypes.DECIMAL(10, 2)
  }
}, {
  timestamps: false
});

Evento.belongsTo(Usuario, { foreignKey: 'FK_Id_Usuario', as: 'Usuario' });
Usuario.hasMany(Evento, { foreignKey: 'FK_Id_Usuario', as: 'Eventos' });

module.exports = Evento;
