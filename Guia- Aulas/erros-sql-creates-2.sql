CREATE DATABASE lojaerros;

USE lojaerros;

CREATE TABLE cliente(
	cod_cliente INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(100),
    cep VARCHAR(9),
    estado VARCHAR(2),
    PRIMARY KEY(cod_cliente)
);

CREATE TABLE vendedor(
	cod_vendedor INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario_fixo DOUBLE,
    faixa_comissao VARCHAR(1),
    PRIMARY KEY(cod_vendedor)
);

CREATE TABLE produto(
	cod_produto INT AUTO_INCREMENT,
    descricao VARCHAR(200),
    nome VARCHAR(100),
    valor_unitario DOUBLE,
    PRIMARY KEY(cod_produto)
);

CREATE TABLE pedido(
	num_pedido INT AUTO_INCREMENT,
    prazo_entrega INT NOT NULL,
    FK_cod_cliente INT,
    FK_cod_vendedor INT,
    PRIMARY KEY(num_pedido),
    FOREIGN KEY(FK_cod_cliente) REFERENCES cliente(cod_cliente),
    FOREIGN KEY(FK_cod_vendedor) REFERENCES vendedor(cod_vendedor)
);

CREATE TABLE produtopedido(
	FK_produto_cod_produto INT,
	FK_pedido_num_pedido INT,
    quantidade INT,
    PRIMARY KEY(FK_produto_cod_produto, FK_pedido_num_pedido),
    FOREIGN KEY(FK_produto_cod_produto) REFERENCES produto(cod_produto),
    FOREIGN KEY(FK_pedido_num_pedido) REFERENCES pedido(num_pedido)
);