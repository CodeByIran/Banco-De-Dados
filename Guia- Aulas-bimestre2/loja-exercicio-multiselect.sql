# Liste todos os vendedores que atenderam o Cliente 1
SELECT nome FROM vendedor WHERE cod_vendedor IN (SELECT FK_cod_vendedor FROM pedido WHERE FK_cod_cliente = 1);

# Liste todas os pedidos do Vendedor 1
SELECT num_pedido FROM pedido WHERE FK_cod_vendedor = (SELECT cod_vendedor from vendedor WHERE nome = "Vendedor 1");

# Liste todos os pedidos do Cliente 3
SELECT num_pedido FROM pedido WHERE FK_cod_cliente = (SELECT cod_cliente FROM cliente WHERE nome = "Cliente 3");

# Liste todos os clientes do Vendedor 3
-- SELECT nome FROM cliente WHERE cod_cliente IN(SELECT FK_cod_cliente FROM pedido WHERE FK_cod_vendedor = 3); 
SELECT nome FROM cliente WHERE cod_cliente IN(SELECT FK_cod_cliente FROM pedido WHERE FK_cod_vendedor = (SELECT cod_vendedor FROM vendedor WHERE nome = "Vendedor 3"));  

#Liste os vendedores cujo salário fixo é maior que a média dos salários fixos de todos os vendedores.
SELECT nome FROM vendedor WHERE salario_fixo > (SELECT AVG(salario_fixo) FROM vendedor); 

# Encontre os nomes dos clientes que já fizeram pelo menos um pedido.
SELECT nome FROM cliente WHERE cod_cliente NOT IN(SELECT DISTINCT FK_cod_cliente FROM pedido);

# Encontre os produtos que foram pedidos mais de 3 vezes.
SELECT nome FROM produto WHERE cod_produto IN (SELECT FK_cod_produto FROM itempedido group by FK_cod_produto > 3);

# Liste os vendedores que nunca realizaram um pedido.
SELECT nome FROM vendedor WHERE cod_vendedor NOT IN(SELECT FK_cod_vendedor FROM pedido);

# Liste os pedidos cujo valor total é maior que o valor médio de todos os pedidos.

# Encontre os clientes que não têm nenhum pedido associado.
SELECT nome FROM cliente WHERE cod_cliente NOT IN(SELECT FK_cod_cliente from pedido);

# Liste os nomes dos vendedores que têm uma faixa de comissão igual à de algum outro vendedor.
SELECT nome, faixa_comissao FROM vendedor WHERE faixa_comissao IN(SELECT faixa_comissao FROM vendedor GROUP BY faixa_comissao HAVING COUNT(faixa_comissao) >= 2);

# Liste os produtos cujo valor unitário é superior ao valor unitário médio de todos os produtos.
SELECT nome FROM produto WHERE valor_unitario >(SELECT AVG(valor_unitario) FROM pedido);

# Encontre os pedidos que têm um prazo de entrega maior do que a média de prazo de entrega de todos os pedidos.
SELECT num_pedido FROM pedido WHERE prazo_entrega >(SELECT AVG(prazo_entrega) FROM pedido);