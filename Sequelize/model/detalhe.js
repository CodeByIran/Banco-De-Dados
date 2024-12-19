const { DataTypes } = require('sequelize');
const database = require('../db');

const Detalhe = database.define(
    'Detalhe',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        produto_id: {  
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Produtos',  
                key: 'id'           
            }
        },
        garantia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estoque: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
);

module.exports = Detalhe;
