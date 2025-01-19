const sequelize = require('./db');
const setupRelationships = require('./models/relationships');  // Este arquivo precisa ser criado

(async () => {
  try {
    // Configurar relacionamentos
    setupRelationships();

    // Sincronizar o banco de dados
    await sequelize.sync({ force: false });
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();
