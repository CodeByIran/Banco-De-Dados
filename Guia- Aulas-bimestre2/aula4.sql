create database empresa;

use empresa;

create table cliente(
    email varchar(100),
    nome varchar(100),
    primary key(email)
    );
    
create table servico(
	cod int,
    nome varchar(10),
    primary key(cod)
);

create table profissional(
	cod int,
    nome varchar(10),
	tel varchar(11),
    primary key(cod)
);

CREATE TABLE clienteservico(
	FK_cliente_email VARCHAR(100),
    FK_servico_cod INT,
    PRIMARY KEY(FK_cliente_email, FK_servico_cod),
    FOREIGN KEY(FK_cliente_email) REFERENCES cliente(email),
    FOREIGN KEY(FK_servico_cod) REFERENCES servico(cod)
);

CREATE TABLE servicoprofissional(
	FK_servico_cod INT,
    FK_profissional_cod INT,
    PRIMARY KEY(FK_servico_cod, FK_profissional_cod),
    FOREIGN KEY(FK_servico_cod) REFERENCES servico(cod),
    FOREIGN KEY(FK_profissional_cod) REFERENCES profissional(cod)
);