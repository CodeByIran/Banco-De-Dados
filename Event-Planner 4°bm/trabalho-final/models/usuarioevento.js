const { 
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsuarioEvento extends Model {
    static associate(models) {
      UsuarioEvento.belongsTo(models.Usuario, { foreignKey: 'FK_Usuario_Id_Usuario' });
      UsuarioEvento.belongsTo(models.Evento, { foreignKey: 'FK_Evento_Id_Evento' });
    }
  }

  UsuarioEvento.init(
    {
      FK_Usuario_Id_Usuario: { type: DataTypes.INTEGER, primaryKey: true },
      FK_Evento_Id_Evento: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      sequelize,
      modelName: 'UsuarioEvento',
      freezeTableName: true,
    }
  );

  return UsuarioEvento;
};
