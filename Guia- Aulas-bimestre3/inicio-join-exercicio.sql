# Liste os nomes de todos os alunos e seus respectivos cursos
select a.nome as NomeAluno, c.nome as NomeCurso from aluno a
inner join curso c on a.FK_curso_id = c.id;

# Liste os nomes de todos os professores e as disciplinas que eles ministram
SELECT p.nome AS NomeProfessor, d.nome AS NomeDisciplina FROM professor p
INNER JOIN disciplina d ON p.siape = d.FK_prof_siape;

# Liste os nomes de todos os alunos e a nota mais alta que eles obtiveram em qualquer disciplina
select a.nome as NomeAluno, max(ad.nota) as NotaMaxima from aluno a
inner join alunodisciplina ad on a.mat = ad.FK_aluno_mat
group by a.nome;

# Liste todas as disciplinas que têm alunos matriculados, mostrando o nome da disciplina e a quantidade de alunos matriculados em cada uma
select d.nome as NomeDisciplina, count(ad.FK_aluno_mat) as QtdAlunos from disciplina d 
inner join alunodisciplina ad on d.id = ad.FK_disciplina_id
group by d.nome;

# DESAFIO!!
# Encontra os alunos matriculados nas disciplinas ministradas por um professor cujo e-mail é "professor@exemplo.com"
select a.nome as NomeAlunoMatriculados from aluno a
inner join alunodisciplina ad on a.mat = ad.FK_aluno_mat
inner join disciplina d on d.id = ad.FK_disciplina_id
inner join professor p on p.siape = d.FK_prof_siape
where p.email = 'professor.c@exemplo.com';