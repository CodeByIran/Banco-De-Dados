const sequelize = require('./db');  
const setupRelationships = require('./relationships'); 

(async () => {
  try {

    setupRelationships();

    // Sincronizar o banco de dados
    await sequelize.sync({ force: true });  // o "force" pode ser false para não perder dados
    console.log('Banco de dados sincronizado.');

    console.log('Aplicação inicializada com sucesso.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();