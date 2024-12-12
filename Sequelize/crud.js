const Produto = require('./model/produto');
const database = require('./db');

(
    async () => {  
        try {
            await database.sync();
            console.log("DB sync");
        }
        catch (error) {
            console.error("Erro!", error)
        }
    }
)();