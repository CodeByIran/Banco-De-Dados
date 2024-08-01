create database primeirobd;

use primeirobd;
#ALUNO(mat, nome, email, endereco)
create table aluno(
	mat varchar(9),
    nome varchar(50),
    email varchar(30),
    endereco varchar(100),
    primary key(mat) 
);
#turma(cod, nome, sala)
create table turma(
	cod int,
    nome varchar(6),
    sala int,
    primary key(cod)
);

#AlunoTurma(FK_aluno_mat, FK_turma_cod)
	create table alunoturma(
    FK_aluno_mat varchar(9),
    FK_turma_cod int,
    foreign key(FK_aluno_mat) references aluno(mat), 
    foreign key(FK_turma_cod) references turma(cod),
    primary key(FK_aluno_mat, FK_turma_cod)
    );