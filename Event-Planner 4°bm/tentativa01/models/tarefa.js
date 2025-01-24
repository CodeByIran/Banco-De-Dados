const {
   Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    static associate(models) {
      Tarefa.belongsTo(models.Evento, { foreignKey: 'FK_Id_Evento' });
    }
  }

  Tarefa.init(
    {
      Descricao: { type: DataTypes.TEXT },
      Status: { type: DataTypes.STRING },
      Prazo_Inicial: { type: DataTypes.DATE },
      Prazo_Final: { type: DataTypes.DATE },
      FK_Id_Evento: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: 'Tarefa',
      freezeTableName: true,
    }
  );

  return Tarefa;
};
