ALUNO(mat, nome, email, endereco)

int => inteiro
varchar => string => Palavras
double => real => Representa números reais, permitindo casas decimais. Ex: 3.14, -0.001, 42.5.
date Representa datas no formato ano-mês-dia. Ex: 2024-07-11.
bool (booleano): Representa valores lógicos, podendo ser verdadeiro (true) ou falso (false).
	
TURMA(cod, nome, sala)
ALUNOTURMA(FK_aluno_mat, FK_turma_cod)
