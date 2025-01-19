const {
   Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EventoConvidados extends Model {
    static associate(models) {
      EventoConvidados.belongsTo(models.Evento, { foreignKey: 'FK_Evento_Id_Evento' });
      EventoConvidados.belongsTo(models.Convidados, { foreignKey: 'FK_Convidados_Id_Convidado' });
    }
  }

  EventoConvidados.init(
    {
      FK_Evento_Id_Evento: { type: DataTypes.INTEGER, primaryKey: true },
      FK_Convidados_Id_Convidado: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      sequelize,
      modelName: 'EventoConvidados',
      freezeTableName: true,
    }
  );

  return EventoConvidados;
};
