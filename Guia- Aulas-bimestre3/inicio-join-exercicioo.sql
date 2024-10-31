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
# Liste os nomes de todos os professores e as disciplinas que eles ministram

# Liste os nomes de todos os alunos e a nota mais alta que eles obtiveram em qualquer disciplina

# Liste todas as disciplinas que têm alunos matriculados, mostrando o nome da disciplina e a quantidade de alunos matriculados em cada uma

# DESAFIO!!
# Encontra os alunos matriculados nas disciplinas ministradas por um professor cujo e-mail é "professor@exemplo.com"
