INSERT INTO Usuario (Nome, Email, Cargo, Empresa) VALUES 
('Ana Silva', 'ana.silva@empresa.com', 'Gerente de Projetos', 'Empresa A'),
('Bruno Souza', 'bruno.souza@empresa.com', 'Coordenador de Eventos', 'Empresa B'),
('Carla Pereira', 'carla.pereira@empresa.com', 'Analista de Eventos', 'Empresa C'),
('Fernanda Lima', 'fernanda.lima@empresa.com', 'Assistente de Marketing', 'Empresa D'),
('Luís Costa', 'luis.costa@empresa.com', 'Diretor de Vendas', 'Empresa E'),
('Juliana Martins', 'juliana.martins@empresa.com', 'Gerente de TI', 'Empresa F');

INSERT INTO Fornecedor (Nome, Email, Servico, Disponibilidade) VALUES 
('João Oliveira', 'joao@fornecedor.com', 'Catering', 'Disponível'),
('Mariana Santos', 'mariana@fornecedor.com', 'Decoração', 'Indisponível'),
('Carlos Ferreira', 'carlos@fornecedor.com', 'Iluminação', 'Disponível'),
('Paula Almeida', 'paula@fornecedor.com', 'Fotografia', 'Disponível'),
('Rafael Lima', 'rafael@fornecedor.com', 'Música ao Vivo', 'Disponível'),
('Sofia Carvalho', 'sofia@fornecedor.com', 'Transporte', 'Indisponível');


INSERT INTO Proposta (Valor, Status, Data, FK_Id_Fornecedor) VALUES 
(15000.00, 'Aprovada', '2024-08-15', 1),
(20000.00, 'Pendente', '2024-09-01', 2),
(8000.00, 'Rejeitada', '2024-08-05', 3),
(22000.00, 'Aprovada', '2024-08-16', 4),
(12000.00, 'Pendente', '2024-08-20', 5),
(10000.00, 'Aprovada', '2024-08-12', 6);

INSERT INTO Evento (Nome, Data, Local, Descricao, Orçamento) VALUES 
('Lançamento de Produto', '2024-09-20', 'Centro de Convenções', 'Evento para lançamento de novo produto', 50000.00),
('Conferência de Tecnologia', '2024-10-10', 'Hotel Central', 'Conferência anual de tecnologia', 120000.00),
('Festa de Fim de Ano', '2024-12-15', 'Salão de Festas', 'Celebração de fim de ano da empresa', 30000.00),
('Workshop de Inovação', '2024-11-05', 'Auditório Principal', 'Workshop sobre novas tecnologias e inovações', 40000.00),
('Seminário de Saúde', '2024-11-25', 'Espaço Cultural', 'Seminário focado em saúde e bem-estar', 60000.00),
('Gala de Premiação', '2024-12-10', 'Teatro Municipal', 'Gala para premiação dos funcionários', 80000.00);


INSERT INTO Tarefa (Descricao, Status, Prazo_Inicial, Prazo_Final, FK_Id_Evento) VALUES 
('Contratar serviço de buffet', 'Concluída', '2024-08-01', '2024-08-05', 1),
('Decoração do local', 'Em andamento', '2024-09-01', '2024-09-19', 2),
('Organizar som e luz', 'Pendente', '2024-12-01', '2024-12-10', 3),
('Enviar convites', 'Concluída', '2024-08-06', '2024-08-10', 4),
('Contratar fotógrafa', 'Pendente', '2024-08-15', '2024-08-30', 5),
('Confirmar lista de convidados', 'Em andamento', '2024-11-01', '2024-11-15', 6);


INSERT INTO Convidados (Nome, Papel) VALUES 
('Pedro Santos', 'Palestrante'),
('Maria Clara', 'Convidada'),
('Roberto Lima', 'Convidado VIP'),
('Ana Oliveira', 'Convidada VIP'),
('Felipe Andrade', 'Palestrante'),
('Claudia Ribeiro', 'Convidada');


INSERT INTO UsuarioEvento (FK_Usuario_Id_Usuario, FK_Evento_Id_Evento) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6);


INSERT INTO EventoConvidados (FK_Evento_Id_Evento, FK_Convidados_Id_Convidado) VALUES 
(1, 1), 
(2, 2), 
(3, 3),
(4, 4),
(5, 5),
(6, 6);


INSERT INTO UsuarioTarefa (FK_Usuario_Id_Usuario, FK_Tarefa_Id_Tarefa) VALUES 
(1, 1), 
(2, 2), 
(3, 3),
(4, 4),
(5, 5),
(6, 6);

