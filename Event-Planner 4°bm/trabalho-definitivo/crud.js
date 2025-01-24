const Usuario = require('./models/usuario');
const Fornecedor = require('./models/fornecedor');
const Proposta = require('./models/proposta');
const Evento = require('./models/evento');
const Tarefa = require('./models/tarefa');
const Convidados = require('./models/convidados');
const EventoConvidados = require('./models/eventoConvidados');
const UsuarioEvento = require('./models/usuarioEvento');
const UsuarioTarefa = require('./models/usuarioTarefa');

const database = require('./db');

const setupRelationships = require('./relationships');


(async () => {
    try {
        setupRelationships();

        await database.sync({ force: true }); // "force: true" recria tabelas, cuidado em produção!
        console.log('Banco de dados sincronizado com sucesso!');

        // Criar um novo usuário
        const novoUsuario = await Usuario.create({
            Nome: 'Mariaaa Oliveira',
            Email: 'maria.oliveira@email.com',
            Cargo: 'Organizadora',
            Empresa: 'Eventos Oliveira',
        });
        console.log('Novo usuário criado:', novoUsuario.toJSON());


        //ATENÇÃO MY TEACHER ♡ ♡ ♡
        /* Para descomentar, selecione a parte que deseja e der um Ctrll + K 
        e dps Ctrll + U
        */

        /* Para Comentar , selecione a parte que deseja e der um Ctrll + K 
        e dps Ctrll + C
        */
        //FIM DA ATENÇÃO


        // // Ler todos os usuários
        // const usuarios = await Usuario.findAll();
        // console.log('Usuários encontrados:', JSON.stringify(usuarios, null, 2));

        // // Atualizar um usuário
        // const [updatedUsuario] = await Usuario.update(
        //     { Cargo: 'Gerente' },
        //     { where: { Id_Usuario: 1 } }
        // );
        // if (updatedUsuario) {
        //     console.log('Usuário atualizado com sucesso.');
        // } else {
        //     console.log('Usuário não encontrado.');
        // }

        // Excluir um usuário
        // const deletedUsuario = await Usuario.destroy({ where: { Id_Usuario: 1 } });
        // if (deletedUsuario) {
        //     console.log('Usuário excluído com sucesso.');
        // } else {
        //     console.log('Usuário não encontrado.');
        // }
        //------------------------------------------------------------

        // // Criar um novo fornecedor
        // const novoFornecedor = await Fornecedor.create({
        //     Nome: 'Fornecedor XYZ',
        //     Email: 'fornecedor@xyz.com',
        //     Servico: 'Buffet',
        //     Disponibilidade: 'Média',
        // });
        // console.log('Fornecedor criado:', novoFornecedor.toJSON());

        // // Ler todos os fornecedores
        // const fornecedores = await Fornecedor.findAll();
        // console.log('Fornecedores encontrados:', JSON.stringify(fornecedores, null, 2));

        // // Atualizar um fornecedor
        // const [updatedFornecedor] = await Fornecedor.update(
        //     { Disponibilidade: 'Baixa' },
        //     { where: { Id_Fornecedor: 1 } }
        // );
        // if (updatedFornecedor) {
        //     console.log('Fornecedor atualizado com sucesso.');
        // } else {
        //     console.log('Fornecedor não encontrado.');
        // }

        // // Excluir um fornecedor
        // const deletedFornecedor = await Fornecedor.destroy({ where: { Id_Fornecedor: 1 } });
        // if (deletedFornecedor) {
        //     console.log('Fornecedor excluído com sucesso.');
        // } else {
        //     console.log('Fornecedor não encontrado.');
        // }
        //------------------------------------------------------------

        // //------------------------------------------------------------
        // // Criar uma nova proposta
        // const novaProposta = await Proposta.create({
        //     Valor: 3000,
        //     Status: 'Pendente',
        //     Data: new Date(),
        //     FK_Id_Fornecedor: 1, // ID do fornecedor
        // });
        // console.log('Proposta criada:', novaProposta.toJSON());

        // // Ler todas as propostas
        // const propostas = await Proposta.findAll({
        //     include: { model: Fornecedor, as: 'Fornecedor' },
        // });
        // console.log('Propostas encontradas:', JSON.stringify(propostas, null, 2));

        // // Atualizar uma proposta
        // const [updatedProposta] = await Proposta.update(
        //     { Status: 'Aprovada' },
        //     { where: { Id_Proposta: 1 } }
        // );
        // if (updatedProposta) {
        //     console.log('Proposta atualizada com sucesso.');
        // } else {
        //     console.log('Proposta não encontrada.');
        // }

        // // Excluir uma proposta
        // const deletedProposta = await Proposta.destroy({ where: { Id_Proposta: 1 } });
        // if (deletedProposta) {
        //     console.log('Proposta excluída com sucesso.');
        // } else {
        //     console.log('Proposta não encontrada.');
        // }
        // //------------------------------------------------------------

        // //------------------------------------------------------------
        // // Criar uma nova tarefa
        // const novaTarefa = await Tarefa.create({
        //     Descricao: 'Contratar DJ',
        //     Status: 'Pendente',
        //     Prazo_Inicial: new Date(),
        //     Prazo_Final: new Date(new Date().setDate(new Date().getDate() + 7)),
        //     FK_Id_Evento: 1, // ID do evento
        // });
        // console.log('Tarefa criada:', novaTarefa.toJSON());

        // // Ler todas as tarefas
        // const tarefas = await Tarefa.findAll({
        //     include: { model: Evento, as: 'Evento' },
        // });
        // console.log('Tarefas encontradas:', JSON.stringify(tarefas, null, 2));

        // // Atualizar uma tarefa
        // const [updatedTarefa] = await Tarefa.update(
        //     { Status: 'Concluída' },
        //     { where: { Id_Tarefa: 1 } }
        // );
        // if (updatedTarefa) {
        //     console.log('Tarefa atualizada com sucesso.');
        // } else {
        //     console.log('Tarefa não encontrada.');
        // }

        // // Excluir uma tarefa
        // const deletedTarefa = await Tarefa.destroy({ where: { Id_Tarefa: 1 } });
        // if (deletedTarefa) {
        //     console.log('Tarefa excluída com sucesso.');
        // } else {
        //     console.log('Tarefa não encontrada.');
        // }

        // //------------------------------------------------------------
        // // Criar um novo convidado 
        // const novoConvidado = await Convidados.create({
        //     Nome: 'Carlos Silva',
        //     Papel: 'Padrinho'
        // });
        // console.log('Convidado criado:', novoConvidado.toJSON());

        // // Ler todos os convidados
        // const convidados = await Convidados.findAll();
        // console.log('Convidados encontrados:', JSON.stringify(convidados, null, 2));

        // // Atualizar um convidado 
        // const [updatedConvidado] = await Convidados.update(
        //     { Papel: 'Madrinha' },
        //     { where: { Id_Convidado: 1 } }
        // );
        // if (updatedConvidado) {
        //     console.log('Convidado atualizado com sucesso.');
        // } else {
        //     console.log('Convidado não encontrado.');
        // }

        // // excluir um convidado
        // const deletedConvidado = await Convidados.destroy({ where: { Id_Convidado: 1 } });
        // if (deletedConvidado) {
        //     console.log('Convidado excluído com sucesso.');
        // } else {
        //     console.log('Convidado não encontrado.');
        // }

        // //------------------------------------------------------------

        // //-----------------EventoConvidados-------------------------------------------
        // // Associar um convidado a um evento
        // const novoEventoConvidado = await EventoConvidados.create({
        //     FK_Evento_Id_Evento: 1, // ID do evento
        //     FK_Convidados_Id_Convidado: 1 // ID do convidado
        // });
        // console.log('Associação criada:', novoEventoConvidado.toJSON());

        // // Ler todas as associações de convidados a eventos
        // const eventoConvidados = await EventoConvidados.findAll({
        //     include: [
        //         { model: Evento, as: 'Evento' },
        //         { model: Convidados, as: 'Convidados' }
        //     ]
        // });
        // console.log('Associações encontradas:', JSON.stringify(eventoConvidados, null, 2));

        // // Remover um convidado de um evento
        // const deletedEventoConvidado = await EventoConvidados.destroy({
        //     where: {
        //         FK_Evento_Id_Evento: 1, // ID do evento
        //         FK_Convidados_Id_Convidado: 1 // ID do convidado
        //     }
        // });
        // if (deletedEventoConvidado) {
        //     console.log('Convidado removido do evento com sucesso.');
        // } else {
        //     console.log('Associação não encontrada.');
        // }

        // //------------------------------------------------------------
        // //--------------------------UsuarioTarefa----------------------------------
        // //Associar um usuário a uma tarefa
        // const novoUsuarioTarefa = await UsuarioTarefa.create({
        //     FK_Usuario_Id_Usuario: 1, // ID do usuário
        //     FK_Tarefa_Id_Tarefa: 1 // ID da tarefa
        // });
        // console.log('Associação criada:', novoUsuarioTarefa.toJSON());

        // //Ler todas as associações de usuários a tarefas
        // const usuarioTarefas = await UsuarioTarefa.findAll({
        //     include: [
        //         { model: Usuario, as: 'Usuario' },
        //         { model: Tarefa, as: 'Tarefa' }
        //     ]
        // });
        // console.log('Associações encontradas:', JSON.stringify(usuarioTarefas, null, 2));

        // // Remover uma tarefa de um usuário
        // const deletedUsuarioTarefa = await UsuarioTarefa.destroy({
        //     where: {
        //         FK_Usuario_Id_Usuario: 1, // ID do usuário
        //         FK_Tarefa_Id_Tarefa: 1 // ID da tarefa
        //     }
        // });
        // if (deletedUsuarioTarefa) {
        //     console.log('Tarefa removida do usuário com sucesso.');
        // } else {
        //     console.log('Associação não encontrada.');
        // }
        // //------------------------------------------------------------

        // //-----------------Proposta-------------------------------------------
        // // Criar uma proposta   
        // const newProposta = await Proposta.create({
        //     Valor: 5000,
        //     Status: 'Pendente',
        //     Data: new Date(),
        //     FK_Id_Fornecedor: 1 // ID do fornecedor
        // });
        // console.log('Proposta criada:', newProposta.toJSON());

        // // Ler todas as propostas
        // const proposta = await Proposta.findAll({
        //     include: { model: Fornecedor, as: 'Fornecedor' }
        // });
        // console.log('Propostas encontradas:', JSON.stringify(proposta, null, 2));

        // // Atualizar uma proposta
        // const [updateProposta] = await Proposta.update(
        //     { Status: 'Aprovada' },
        //     { where: { Id_Proposta: 1 } }
        // );
        // if (updateProposta) {
        //     console.log('Proposta atualizada com sucesso.');
        // } else {
        //     console.log('Proposta não encontrada.');
        // }

        // // Excluir uma proposta 
        // const deleteProposta = await Proposta.destroy({ where: { Id_Proposta: 1 } });
        // if (deleteProposta) {
        //     console.log('Proposta excluída com sucesso.');
        // } else {
        //     console.log('Proposta não encontrada.');
        // }
        // //------------------------------------------------------------

        // //-------------------------UsuarioEvento----------------------------------
        // //Associar um usuário a um evento
        // const novoUsuarioEvento = await UsuarioEvento.create({
        //     FK_Usuario_Id_Usuario: 1, // ID do usuário
        //     FK_Evento_Id_Evento: 1 // ID do evento
        // });
        // console.log('Associação criada:', novoUsuarioEvento.toJSON());

        // //Ler todas as associações de usuários a eventos
        // const usuarioEventos = await UsuarioEvento.findAll({
        //     include: [
        //         { model: Usuario, as: 'Usuario' },
        //         { model: Evento, as: 'Evento' }
        //     ]
        // });
        // console.log('Associações encontradas:', JSON.stringify(usuarioEventos, null, 2));

        // //Remover um usuário de um evento
        // const deletedUsuarioEvento = await UsuarioEvento.destroy({
        //     where: {
        //         FK_Usuario_Id_Usuario: 1, // ID do usuário
        //         FK_Evento_Id_Evento: 1 // ID do evento
        //     }
        // });
        // if (deletedUsuarioEvento) {
        //     console.log('Usuário removido do evento com sucesso.');
        // } else {
        //     console.log('Associação não encontrada.');
        // }
        // //------------------------------------------------------------


        // //------------------------------------------------------------
        // // Criar um evento
        // const novoEvento = await Evento.create({
        //     Nome: 'Festa de Aniversário',
        //     Data: new Date(),
        //     Local: 'Salão de Festas',
        //     Descricao: 'Festa de aniversário de 30 anos',
        //     Orçamento: 10000,
        //     FK_Id_Usuario: novoUsuario.Id_Usuario,
        // });
        // console.log('Novo evento criado:', novoEvento.toJSON());

        // // Ler um evento por ID
        // const evento = await Evento.findByPk(1, {
        //     include: { model: Usuario, as: 'Usuario' } // Inclui informações do usuário responsável
        // });
        // if (evento) {
        //     console.log('Evento encontrado:', evento.toJSON());
        // } else {
        //     console.log('Evento não encontrado.');
        // }

        // // Atualizar um evento 
        // const [updatedEvento] = await Evento.update(
        //     { Orçamento: 12000 }, // Campos a serem atualizados
        //     { where: { Id_Evento: 1 } } // ID do evento a ser atualizado
        // );
        // if (updatedEvento) {
        //     console.log('Evento atualizado com sucesso.');
        // } else {
        //     console.log('Evento não encontrado.');
        // }
        // // Excluir um evento
        // const deletedEvento = await Evento.destroy({ where: { Id_Evento: 1 } }); // ID do evento a ser excluído
        // if (deletedEvento) {
        //     console.log('Evento excluído com sucesso.');
        // } else {
        //     console.log('Evento não encontrado.');
        // }
        // // Consultar eventos associados ao usuário
        // const eventosDoUsuario = await Evento.findAll({
        //     where: { FK_Id_Usuario: novoUsuario.Id_Usuario },
        //     include: {
        //         model: Usuario,
        //         as: 'Usuario'
        //     }
        // });
        // console.log('Eventos associados ao usuário:', JSON.stringify(eventosDoUsuario, null, 2));

    } catch (error) {
        console.error('Erro ao sincronizar ou operar no banco:', error);
    }
})();