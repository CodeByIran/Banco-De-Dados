SELECT nome, salario_fixo * 1.2 FROM loja.vendedor 
WHERE faixa_comissao <> "B" AND salario_fixo <= 500;

SELECT * FROM cliente WHERE cidade LIKE "MA%";