const { 
  Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsuarioTarefa extends Model {
    static associate(models) {
      UsuarioTarefa.belongsTo(models.Usuario, { foreignKey: 'FK_Usuario_Id_Usuario' });
      UsuarioTarefa.belongsTo(models.Tarefa, { foreignKey: 'FK_Tarefa_Id_Tarefa' });
    }
  }

  UsuarioTarefa.init(
    {
      FK_Usuario_Id_Usuario: { type: DataTypes.INTEGER, primaryKey: true },
      FK_Tarefa_Id_Tarefa: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      sequelize,
      modelName: 'UsuarioTarefa',
      freezeTableName: true,
    }
  );

  return UsuarioTarefa;
};
