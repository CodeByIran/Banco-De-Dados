# Liste os nomes de todos os alunos e seus respectivos cursos
SELECT a.nome AS NomeAluno, c.nome AS NomeCurso FROM aluno a
INNER JOIN curso c ON a.FK_curso_id = c.id;

# Liste os nomes de todos os professores e as disciplinas que eles ministram
SELECT p.nome AS NomeProfessor, d.nome AS NomeDisciplina FROM professor p
INNER JOIN disciplina d ON p.siape = d.FK_prof_siape;

# Liste os nomes de todos os alunos e a nota mais alta que eles obtiveram em qualquer disciplina
SELECT a.nome AS NomeAluno, MAX(ad.nota) AS NotaMaxima FROM aluno a
INNER JOIN alunodisciplina ad ON a.mat = ad.FK_aluno_mat
GROUP BY a.nome;

# Liste todas as disciplinas que têm alunos matriculados, mostrando o nome da disciplina e a quantidade de alunos matriculados em cada uma
SELECT d.nome AS NomeDisciplina, COUNT(ad.FK_aluno_mat) AS QtdAlunos FROM disciplina d 
INNER JOIN alunodisciplina ad ON d.id = ad.FK_disciplina_id
GROUP BY d.nome;

# DESAFIO!!
# Encontra os alunos matriculados nas disciplinas ministradas por um professor cujo e-mail é "professor@exemplo.com"
SELECT a.nome AS NomeAluno, d.nome AS NomeDisciplina FROM aluno a
INNER JOIN alunodisciplina ad ON a.mat = ad.FK_aluno_mat
INNER JOIN disciplina d ON ad.FK_disciplina_id = d.id
INNER JOIN professor p ON d.FK_prof_siape = p.siape
WHERE p.email = 'professor@exemplo.com';