const { 
  Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Proposta extends Model {
    static associate(models) {
      Proposta.belongsTo(models.Fornecedor, { foreignKey: 'FK_Id_Fornecedor' });
    }
  }

  Proposta.init(
    {
      Valor: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      Status: { type: DataTypes.STRING },
      Data: { type: DataTypes.DATE },
      FK_Id_Fornecedor: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: 'Proposta',
      freezeTableName: true,
    }
  );

  return Proposta;
};
