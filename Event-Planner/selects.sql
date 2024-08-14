-- Listar todos os eventos cadastrados
SELECT Nome, Data, Local, Descricao, Orçamento 
FROM Evento;

-- Selecionar todas as tarefas com status 'Pendente'
SELECT Descricao, Prazo_Inicial, Prazo_Final 
FROM Tarefa 
WHERE Status = 'Pendente';

-- Buscar os fornecedores que têm disponibilidade
SELECT Nome, Email, Servico 
FROM Fornecedor 
WHERE Disponibilidade = 'disponivel';

-- Contar o número de tarefas associadas a um evento específico 
SELECT COUNT(*) 
FROM Tarefa 
WHERE FK_Id_Evento = (SELECT Id_Evento FROM Evento WHERE Nome = 'event name');

-- Listar todos os eventos que ocorrem em um local específico
SELECT Nome, Data, Descricao 
FROM Evento 
WHERE Local = 'local name';

-- Selecionar os detalhes das propostas que foram enviadas para um evento específico
SELECT Valor, Status, Data 
FROM Proposta 
WHERE FK_Id_Fornecedor = (SELECT Id_Fornecedor FROM Fornecedor WHERE Nome = 'Nome do fornecedor');

-- Contar o número de convidados de um evento específico
SELECT COUNT(*) 
FROM Convidados 
WHERE Id_Convidado IN (
    SELECT FK_Convidados_Id_Convidado 
    FROM EventoConvidados 
    WHERE FK_Evento_Id_Evento = (SELECT Id_Evento FROM Evento WHERE Nome = 'Nome do Evento')
);
-- Listar todos os eventos e seus orçamentos que têm um orçamento maior que um valor específico
SELECT Nome, Orçamento 
FROM Evento 
WHERE Orçamento > 50000;

-- Buscar todos os eventos associados a um usuário específico
SELECT Nome, Data, Local 
FROM Evento 
WHERE Id_Evento IN (
    SELECT FK_Evento_Id_Evento 
    FROM UsuarioEvento 
    WHERE FK_Usuario_Id_Usuario = (SELECT Id_Usuario FROM Usuario WHERE Nome = 'Nome do Usuário')
);

-- Selecionar todos os eventos que ocorrem em uma data específica
SELECT Nome, Local, Descricao 
FROM Evento 
WHERE Data = '2024-08-15';

-- Listar todos os eventos e o número de tarefas associadas a cada um
SELECT Nome, (SELECT COUNT(*) FROM Tarefa WHERE FK_Id_Evento = Evento.Id_Evento) AS Total_Tarefas 
FROM Evento;

-- Buscar todos os usuários responsáveis por um evento específico
SELECT Nome, Cargo 
FROM Usuario 
WHERE Id_Usuario IN (
    SELECT FK_Usuario_Id_Usuario 
    FROM UsuarioEvento 
    WHERE FK_Evento_Id_Evento = (SELECT Id_Evento FROM Evento WHERE Nome = 'Nome do Evento')
);
-- Selecionar todos os eventos que estão associados a um fornecedor específico
SELECT Nome, Data, Local 
FROM Evento 
WHERE Id_Evento IN (
    SELECT FK_Id_Evento 
    FROM Proposta 
    WHERE FK_Id_Fornecedor = (SELECT Id_Fornecedor FROM Fornecedor WHERE Nome = 'Nome do Fornecedor')
);
-- Listar todos os eventos e a soma total das propostas enviadas para cada um
SELECT Nome, (SELECT SUM(Valor) FROM Proposta WHERE FK_Id_Evento = Evento.Id_Evento) AS Valor_Total_Propostas 
FROM Evento;

-- Selecionar todos os fornecedores que oferecem um serviço específico
SELECT Nome, Email 
FROM Fornecedor 
WHERE Servico = 'Serviço Específico';

-- Contar o número de propostas recebidas por cada fornecedor
SELECT Nome, (SELECT COUNT(*) FROM Proposta WHERE FK_Id_Fornecedor = Fornecedor.Id_Fornecedor) AS Total_Propostas 
FROM Fornecedor;

-- Listar todas as tarefas que devem ser concluídas até uma data específica
SELECT Descricao, Prazo_Final 
FROM Tarefa 
WHERE Prazo_Final <= '2024-09-01';

-- Buscar todas as propostas com status 'Aprovada' e ordená-las por valor
SELECT Valor, Data 
FROM Proposta 
WHERE Status = 'Aprovada'
ORDER BY Valor DESC;

-- Selecionar todos os convidados de um evento específico e o papel de cada um
SELECT Nome, Papel 
FROM Convidados 
WHERE Id_Convidado IN (
    SELECT FK_Convidados_Id_Convidado 
    FROM EventoConvidados 
    WHERE FK_Evento_Id_Evento = (SELECT Id_Evento FROM Evento WHERE Nome = 'Nome do Evento')
);
