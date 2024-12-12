const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'sequelize', //nome do banco
    'aluno.ifal', //name do user
    'aluno.ifal', // senha de acesso
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;
