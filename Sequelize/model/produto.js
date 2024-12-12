const { DataTypes } = require('sequelize');
const database = require('../db');

const Produto = database.define(
    'Produto',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        preco: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
);

module.exports = Produto