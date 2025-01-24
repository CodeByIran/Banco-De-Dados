const { 
  Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fornecedor extends Model {
    static associate(models) {
      Fornecedor.hasMany(models.Proposta, { foreignKey: 'FK_Id_Fornecedor' });
    }
  }

  Fornecedor.init(
    {
      Nome: { type: DataTypes.STRING, allowNull: false },
      Email: { type: DataTypes.STRING, allowNull: false, unique: true },
      Servico: { type: DataTypes.STRING },
      Disponibilidade: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'Fornecedor',
      freezeTableName: true,
    }
  );

  return Fornecedor;
};
