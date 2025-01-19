const { 
  Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      Evento.belongsTo(models.Usuario, { foreignKey: 'FK_Id_Usuario' });
      Evento.hasMany(models.Tarefa, { foreignKey: 'FK_Id_Evento' });
    }
  }

  Evento.init(
    {
      Nome: { type: DataTypes.STRING, allowNull: false },
      Data: { type: DataTypes.DATE },
      Local: { type: DataTypes.STRING },
      Descricao: { type: DataTypes.TEXT },
      Orçamento: { type: DataTypes.DECIMAL(10, 2) },
      FK_Id_Usuario: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: 'Evento',
      freezeTableName: true,
    }
  );

  return Evento;
};
