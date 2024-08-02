-- UPDATE tabela SET coluna = valor WHERE condicao
UPDATE produto SET valor_unitario = 60 WHERE cod_produto = 1;

UPDATE cliente SET cidade = "Rio de Janeiro", estado = "RJ" 
WHERE cod_cliente IN (1,2);

UPDATE pedido SET FK_cod_cliente = 2 WHERE num_pedido = 1;