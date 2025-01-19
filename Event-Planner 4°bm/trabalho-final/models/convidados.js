const { 
  Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Convidados extends Model {
    static associate(models) {
      // Associações para EventoConvidados, se necessário
    }
  }

  Convidados.init(
    {
      Nome: { type: DataTypes.STRING, allowNull: false },
      Papel: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'Convidados',
      freezeTableName: true,
    }
  );

  return Convidados;
};
