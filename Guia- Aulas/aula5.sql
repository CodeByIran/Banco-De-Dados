create database cinema;

use empresa;

create table Ator(
	nasci date,
    cod int,
    nome varchar(10),
    nasc varchar(11),
    primary key(cod)
);
create table Streaming(
	cod int,
    nome varchar(10),
    valor double,
    primary key(cod)
);
create table categoria(
	cod int,
    nome varchar(10)
);

#Filme(titulo, ano, cod, idioma, resumo)
create table Filme(
	tit varchar(12),
    cod int,
    ano int,
    resumo varchar(10),
    primary key(cod),
    FK_categoria_cod int,
    foreign key(FK_categoria_cod) references categoria(cod)
);

create table idiomas(
	FK_filme_cod int,
    idioma varchar(50),
    primary key(FK_filme_cod, idioma),
    foreign key(FK_filme_cod) references filme(cod)
);

create table StreamingFilme(
	FK_Streaming_cod int,
    FK_Filme_cod int,
    PRIMARY KEY(FK_Streaming_cod, FK_Filme_cod),
	FOREIGN KEY(FK_Streaming_cod) REFERENCES Streaming(cod),
    FOREIGN KEY(FK_Filme_cod) REFERENCES Filme(cod)
);

CREATE TABLE FilmeAtor(
	FK_Filme_cod INT,
    FK_Ator_cod INT,
    PRIMARY KEY(FK_Filme_cod, FK_Ator_cod),
    FOREIGN KEY(FK_Filme_cod) REFERENCES Filme(cod),
    FOREIGN KEY(FK_Ator_cod) REFERENCES Ator(cod)
);
