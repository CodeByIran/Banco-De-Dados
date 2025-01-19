const { 
  Model 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Evento, { foreignKey: 'FK_Id_Usuario' });
    }
  }

  Usuario.init({
    Nome: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    Cargo: { type: DataTypes.STRING },
    Empresa: { type: DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'Usuario',
    timestamps: true,  // Esta linha é importante para incluir createdAt/updatedAt
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt',
    freezeTableName: true,
  });

  return Usuario;
};
