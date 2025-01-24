const Usuario = require('./models/usuario');
const Fornecedor = require('./models/fornecedor');
const Proposta = require('./models/proposta');
const Evento = require('./models/evento');
const Tarefa = require('./models/tarefa');
const Convidados = require('./models/convidados');
const EventoConvidados = require('./models/eventoConvidados');
const UsuarioEvento = require('./models/usuarioEvento');
const UsuarioTarefa = require('./models/usuarioTarefa');


module.exports = () => {
  // Relacionamento 1:N (Proposta pertence a um Fornecedor)
  Fornecedor.hasMany(Proposta, {
    foreignKey: 'FK_Id_Fornecedor',
  });

  Proposta.belongsTo(Fornecedor, {
    foreignKey: 'FK_Id_Fornecedor',
  });

  // Relacionamento 1:N (Evento pertence a um Usuario)
  Usuario.hasMany(Evento, {
    foreignKey: 'FK_Id_Usuario',
  });

  Evento.belongsTo(Usuario, {
    foreignKey: 'FK_Id_Usuario',
  });

  // Relacionamento 1:N (Tarefa pertence a um Evento)
  Evento.hasMany(Tarefa, {
    foreignKey: 'FK_Id_Evento',
  });

  Tarefa.belongsTo(Evento, {
    foreignKey: 'FK_Id_Evento',
  });

  // Relacionamento N:M (Evento e Convidados)
  EventoConvidados.belongsTo(Evento, { foreignKey: 'FK_Evento_Id_Evento' });
  EventoConvidados.belongsTo(Convidados, { foreignKey: 'FK_Convidados_Id_Convidado' });
  
  Evento.hasMany(EventoConvidados, { foreignKey: 'FK_Evento_Id_Evento' });
  Convidados.hasMany(EventoConvidados, { foreignKey: 'FK_Convidados_Id_Convidado' });

  // Relacionamento N:M (Usuario e Evento)
  Usuario.belongsToMany(Evento, {
    through: UsuarioEvento,
    foreignKey: 'FK_Usuario_Id_Usuario',
  });

  Evento.belongsToMany(Usuario, {
    through: UsuarioEvento,
    foreignKey: 'FK_Evento_Id_Evento',
  });

  // Relacionamento N:M (Usuario e Tarefa)
  Usuario.belongsToMany(Tarefa, {
    through: UsuarioTarefa,
    foreignKey: 'FK_Usuario_Id_Usuario',
  });

  Tarefa.belongsToMany(Usuario, {
    through: UsuarioTarefa,
    foreignKey: 'FK_Tarefa_Id_Tarefa',
  });
};