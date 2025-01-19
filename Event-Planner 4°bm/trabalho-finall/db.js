const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('EventoDB', 'root', 'iran', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    underscored: true,
  }
});

module.exports = sequelize;
