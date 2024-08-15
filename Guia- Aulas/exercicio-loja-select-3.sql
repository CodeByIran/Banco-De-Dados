# GROUP BY
# Quantos clientes de cada cidade a loja tem?
SELECT cidade, COUNT(*) AS quantidade_clientes
FROM cliente
GROUP BY cidade;

# Quantos itens tem cada pedido?
SELECT FK_num_pedido, SUM(quantidade) AS total_itens
FROM itempedido
GROUP BY FK_num_pedido;

# Quantos pedidos cada vendedor fez?
SELECT FK_cod_vendedor, COUNT(*) AS total_pedidos
FROM pedido
GROUP BY FK_cod_vendedor;

# Qual a soma de produtos e a média de produtos em cada pedido?
SELECT FK_num_pedido, 
       SUM(quantidade) AS soma_produtos,
       AVG(quantidade) AS media_produtos
FROM itempedido
GROUP BY FK_num_pedido;

# Qual o maior, menor e médio prazo de entrega de cada vendedor?
SELECT p.FK_cod_vendedor,
       MAX(p.prazo_entrega) AS maior_prazo,
       MIN(p.prazo_entrega) AS menor_prazo,
       AVG(p.prazo_entrega) AS media_prazo
FROM pedido p
GROUP BY p.FK_cod_vendedor;

# Quantos pedidos cada item está incluido?
SELECT FK_cod_produto, COUNT(*) AS total_pedidos
FROM itempedido
GROUP BY FK_cod_produto;

# Top 3 dos produtos mais vendidos
SELECT p.nome AS nome_produto, 
       SUM(ip.quantidade) AS total_vendido
FROM produto p
JOIN itempedido ip ON p.cod_produto = ip.FK_cod_produto
GROUP BY p.nome
ORDER BY total_vendido DESC
LIMIT 3;