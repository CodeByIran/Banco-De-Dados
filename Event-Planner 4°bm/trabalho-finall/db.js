const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('EventoDB', 'root', 'iran', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
