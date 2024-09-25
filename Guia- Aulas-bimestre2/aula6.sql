create database empresa1;

use empresa1;

create table projeto(
	nome varchar(10),
    cod int,
	primary key(cod)
);

create table aria(
	nome varchar(10),
    cod int,
    primary key(cod)
);

create table empresa(
	nome varchar(10),
    cod int,
    rua varchar(10),
    cidade varchar(10),
    UF varchar(10),
    primary key(cod)
);

create table setor(
	cod int,
    nome varchar(10),
    primary key(cod)
);

create table tell(
	FK_Setor_cod int,
    tel varchar(50),
    primary key(FK_Setor_cod, tel),
    foreign key(FK_Setor_cod) references setor(cod)
);

create table funcionario(
	cod int,
    nome varchar(10),
    email varchar(10),
    primary key(cod),
	FK_setor_cod int,
    FK_gerencia_cod int,
    foreign key(FK_setor_cod) references setor(cod),
    foreign key(FK_gerencia_cod) references funcionario(cod)
    );
    

create table AriaProjeto(
	FK_Aria_cod int,
    FK_Projeto_cod int,
    PRIMARY KEY(FK_Aria_cod, FK_Projeto_cod),
	FOREIGN KEY(FK_Aria_cod) REFERENCES aria(cod),
    FOREIGN KEY(FK_Projeto_cod) REFERENCES projeto(cod)
);

create table ProjetoEmpresa(
	FK_Projeto_cod int,
    FK_Empresa_cod int,
    valor double,
    primary key(FK_Projeto_cod, FK_Empresa_cod),
	foreign key(FK_Projeto_cod) references projeto(cod),
    foreign key(FK_Empresa_cod) references empresa(cod)
);

create table FuncionarioProjeto(
	FK_Funcionario_cod int,
    FK_Projeto_cod int,
    primary key(FK_Funcionario_cod, FK_Projeto_cod),
    foreign key(FK_Funcionario_cod) references funcionario(cod),
    foreign key(FK_Projeto_cod) references projeto(cod)
);



