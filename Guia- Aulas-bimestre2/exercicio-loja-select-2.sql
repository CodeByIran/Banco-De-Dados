# Selecionem o valor do produto mais caro e o mais barato
SELECT MAX(valor_unitario) AS valor_maximo FROM produto;

SELECT MIN(valor_unitario) AS valor_minimo FROM produto;

# Selecionem o custo médio dos produtos
SELECT AVG(valor_unitario) AS custo_medio FROM produto;

# Quantas vendas o vendedor 3 fez?
SELECT COUNT(*) AS quantidade_vendas FROM pedido WHERE FK_cod_vendedor = 3;

# Qual a quantidade média de produtos pedidos?
SELECT AVG(quantidade) AS quantidade_media FROM itempedido;

# Qual o valor caso o cliente compre 10 produtos 1?
SELECT valor_unitario * 10 AS valor_total FROM produto WHERE cod_produto = 1;

# Qual o valor do salário do vendedor 1 caso ele receba um aumento de 12% do salário?
SELECT salario_fixo * 1.12 AS novo_salario FROM vendedor WHERE cod_vendedor = 1;

# Qual a quantidade total de produtos vendidos?
SELECT SUM(quantidade) AS quantidade_total FROM itempedido;