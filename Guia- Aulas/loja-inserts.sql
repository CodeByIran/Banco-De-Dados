INSERT INTO cliente (nome, cidade, cep, estado) VALUES
('Ana Silva', 'São Paulo', '01000-000', 'SP'),
('Carlos Oliveira', 'Rio de Janeiro', '20000-000', 'RJ'),
('Fernanda Santos', 'Belo Horizonte', '30000-000', 'MG'),
('Gabriel Costa', 'Curitiba', '80000-000', 'PR');

INSERT INTO vendedor (nome, salario_fixo, faixa_comissao) VALUES
('João Pereira', 2500.00, 'A'),
('Mariana Souza', 3000.00, 'B'),
('Ricardo Lima', 2800.00, 'A'),
('Tatiane Costa', 3200.00, 'C');

INSERT INTO produto (descricao, nome, valor_unitario) VALUES
('Smartphone com 64GB de armazenamento', 'Smartphone X', 1500.00),
('Notebook com 16GB de RAM', 'Notebook Y', 4000.00),
('Cadeira ergonômica', 'Cadeira Z', 800.00),
('Mouse sem fio', 'Mouse W', 100.00);

INSERT INTO pedido (prazo_entrega, FK_cod_cliente, FK_cod_vendedor) VALUES
(7, 1, 1),
(5, 2, 2),
(10, 3, 3),
(3, 4, 4);

INSERT INTO itempedido (FK_num_pedido, FK_cod_produto, quantidade) VALUES
(1, 1, 2),  
(1, 3, 1), 
(2, 2, 1), 
(3, 4, 3),  
(4, 1, 1);  
