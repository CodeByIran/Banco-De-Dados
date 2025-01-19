const sequelize = require('./db');  // Importar o arquivo de configuração do Sequelize
const Usuario = require('./models/Usuario');
const Fornecedor = require('./models/Fornecedor');
const Proposta = require('./models/Proposta');
const Evento = require('./models/Evento');
const Tarefa = require('./models/Tarefa');
const Convidados = require('./models/Convidados');
const EventoConvidados = require('./models/EventoConvidados');
const UsuarioEvento = require('./models/UsuarioEvento');
const UsuarioTarefa = require('./models/UsuarioTarefa');
const setupRelationships = require('./models/relationships');  // Configurar os relacionamentos

(async () => {
  try {
    // Configurar relacionamentos
    setupRelationships();

    // Sincronizar o banco de dados
    await sequelize.sync({ force: true });  // Se necessário, o "force" pode ser false para não perder dados
    console.log('Banco de dados sincronizado.');

    // Criação de instâncias conforme o modelo solicitado

    // Exemplo: Criar um usuário
    const usuario = await Usuario.create({
      Nome: 'João Silva',
      Email: 'joao.silva@example.com',
      Cargo: 'Organizador',
      Empresa: 'Eventos Ltda'
    });

    // Exemplo: Criar um fornecedor
    const fornecedor = await Fornecedor.create({
      Nome: 'Fornecedor XYZ',
      Email: 'fornecedor@example.com',
      Servico: 'Decoração',
      Disponibilidade: 'Alta'
    });

    // Exemplo: Criar um evento e associar ao usuário
    const evento = await Evento.create({
      Nome: 'Casamento de Ana e Paulo',
      Data: new Date(),
      Local: 'Salão de Festas Central',
      Descricao: 'Evento de casamento com buffet e DJ',
      Orçamento: 15000,
      FK_Id_Usuario: usuario.Id_Usuario
    });

    console.log('Usuário e evento criados:', usuario.toJSON(), evento.toJSON());

    // Exemplo: Criar uma proposta associada a um fornecedor
    const proposta = await Proposta.create({
      Valor: 5000,
      Status: 'Pendente',
      Data: new Date(),
      FK_Id_Fornecedor: fornecedor.Id_Fornecedor
    });

    console.log('Proposta criada:', proposta.toJSON());

    // Exemplo: Consultar eventos associados ao usuário
    const eventosDoUsuario = await Evento.findAll({
      where: { FK_Id_Usuario: usuario.Id_Usuario },
      include: {
        model: Usuario,
        as: 'Usuario'
      }
    });

    console.log('Eventos associados ao usuário:', JSON.stringify(eventosDoUsuario, null, 2));

  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();
