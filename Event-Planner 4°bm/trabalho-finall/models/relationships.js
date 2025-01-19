const Usuario = require('./Usuario');
const Fornecedor = require('./Fornecedor');
const Proposta = require('./Proposta');
const Evento = require('./Evento');
const Tarefa = require('./Tarefa');
const Convidados = require('./Convidados');
const EventoConvidados = require('./EventoConvidados');
const UsuarioEvento = require('./UsuarioEvento');
const UsuarioTarefa = require('./UsuarioTarefa');

function setupRelationships() {
  Usuario.hasMany(Evento, { foreignKey: 'FK_Id_Usuario' });
  Evento.belongsTo(Usuario, { foreignKey: 'FK_Id_Usuario' });

  Fornecedor.hasMany(Proposta, { foreignKey: 'FK_Id_Fornecedor' });
  Proposta.belongsTo(Fornecedor, { foreignKey: 'FK_Id_Fornecedor' });

  Evento.hasMany(Tarefa, { foreignKey: 'FK_Id_Evento' });
  Tarefa.belongsTo(Evento, { foreignKey: 'FK_Id_Evento' });

  Evento.belongsToMany(Convidados, { through: EventoConvidados, foreignKey: 'FK_Evento_Id_Evento' });
  Convidados.belongsToMany(Evento, { through: EventoConvidados, foreignKey: 'FK_Convidados_Id_Convidado' });

  Usuario.belongsToMany(Evento, { through: UsuarioEvento, foreignKey: 'FK_Usuario_Id_Usuario' });
  Evento.belongsToMany(Usuario, { through: UsuarioEvento, foreignKey: 'FK_Evento_Id_Evento' });

  Usuario.belongsToMany(Tarefa, { through: UsuarioTarefa, foreignKey: 'FK_Usuario_Id_Usuario' });
  Tarefa.belongsToMany(Usuario, { through: UsuarioTarefa, foreignKey: 'FK_Tarefa_Id_Tarefa' });
}

module.exports = setupRelationships;
