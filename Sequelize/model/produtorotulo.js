const { DataTypes } = require('sequelize');
const database = require('../db');

ProdutoRotulo = database.define(
    'produto_rotulo',
    {
    atributoEm: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        },
    prioridade: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    }
);

module.exports = ProdutoRotulo;
