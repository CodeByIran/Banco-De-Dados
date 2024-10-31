# Liste os nomes de todos os alunos e seus respectivos cursos
SELECT a.nome AS NomeAluno, c.nome AS Nomecurso
FROM aluno a INNER JOIN curso c
on FK_curso_id = c.id;

-- LISTE TODAS AS DISCIPLINAS DE CADA CURSO  
SELECT c.nome As NomeCurso, d.nome AS NomeDisciplina
FROM curso c INNER JOIN cursodisciplina cd
ON c.id = FK_disciplina_id
INNER JOIN disciplina d
ON cd.FK_disciplina_id = d.id;

-- LISTE TODOS OS ALUNOS MATRICULADOS NAS DISCIPLINAS
SELECT d.nome AS NomeDisciplinas, a.nome AS AlunosNome
FROM disciplina d INNER JOIN alunodisciplina ad
ON d.id =  FK_disciplina_id
INNER JOIN aluno a 
ON ad.FK_aluno_mat = d.id;

SELECT a.nome AS AlunoNome, d.nome AS NomeDisciplina
FROM aluno a INNER JOIN alunodisciplina ad
ON a.mat = ad.FK_aluno_mat
INNER JOIN disciplina d 
ON ad.FK_disciplina_id = d.id;
# Liste os nomes de todos os professores e as disciplinas que eles ministram
SELECT p.nome AS professor, d.nome AS disciplina
FROM professor p INNER JOIN disciplina d
ON 

# Liste os nomes de todos os alunos e a nota mais alta que eles obtiveram em qualquer disciplina

# Liste todas as disciplinas que têm alunos matriculados, mostrando o nome da disciplina e a quantidade de alunos matriculados em cada uma

# DESAFIO!!
# Encontra os alunos matriculados nas disciplinas ministradas por um professor cujo e-mail é "professor@exemplo.com"
