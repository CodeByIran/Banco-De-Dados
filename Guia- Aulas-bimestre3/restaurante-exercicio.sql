# Liste os nomes dos clientes que fizeram pedidos, o nome do restaurante onde o pedido foi feito e o valor total do pedido.
select u.nome as cliente, r.nome as restaurante, p.valor_total as total
from usuario u 
inner join pedido p on u.id = p.FK_usuario_id 
inner join restaurante r on r.id = p.FK_restaurante_id;

# Liste os nomes dos pratos e os restaurantes que os servem, junto com o preço de cada prato.
select pr.nome as pratos, r.nome as restaurante, pr.preco 
from prato pr
inner join restaurante r on pr.FK_restaurante_id = r.id;

# Encontre todos os pedidos feitos em um determinado restaurante (por exemplo, "Restaurante A") e liste os nomes dos clientes e o valor total de cada pedido.
SELECT u.nome as clientes, r.nome as restaurante, p.valor_total as total
from pedido p 
inner join usuario u on p.FK_usuario_id = u.id 
inner join restaurante r on p.FK_restaurante_id = r.id where r.nome = "Restaurante A";

# Liste os pratos pedidos por cada cliente, a quantidade pedida e o nome do restaurante que serviu o prato.
select u.nome as clientes, pr.nome as prato, ip.quantidade, r.nome as restaurante 
from itempedido ip
inner join pedido p on ip.FK_pedido_id = p.id
inner join usuario u on p.FK_usuario_id = u.id
inner join prato pr on ip.FK_prato_id = pr.id
inner join restaurante r on pr.FK_restaurante_id = r.id;

# Liste todos os pratos que estão no cardápio de um determinado restaurante, juntamente com o nome do restaurante e o período de validade do cardápio.
select pr.nome as prato, r.nome as restaurante, c.data_inicio, c.data_fim
from cardapio_prato cp
inner join prato pr on cp.FK_prato_id = pr.id
inner join cardapio c on cp.FK_cardapio_id = c.id
inner join restaurante r on c.FK_restaurante_id = r.id where r.nome = "Restaurante B";

# Encontre os clientes que já fizeram mais de 3 pedidos em qualquer restaurante. Liste o nome do cliente e a quantidade total de pedidos que ele fez.
SELECT u.nome AS nome_cliente, COUNT(p.id) AS total_pedidos
FROM usuario u
INNER JOIN pedido p ON u.id = p.FK_usuario_id
GROUP BY u.id, u.nome HAVING COUNT(p.id) > 3;

# Liste os clientes que fizeram pedidos em mais de um restaurante, mostrando o nome do cliente e a quantidade de restaurantes diferentes em que ele fez pedidos.
select u.nome as nome_usuario, COUNT(distinct p.FK_restaurante_id) as quantidade_restaurantes
from usuario u
inner join pedido p on u.id = p.FK_usuario_id
group by u.id, u.nome having COUNT(distinct p.FK_restaurante_id) > 1;
    
# Liste os restaurantes e o número total de pratos que cada restaurante possui em seus cardápios.
SELECT r.nome AS nome_restaurante, COUNT(p.id) AS total_pratos
FROM restaurante r
INNER JOIN prato p ON r.id = p.FK_restaurante_id
GROUP BY r.id, r.nome;
    
# Liste os pratos que pertencem a restaurantes localizados em uma cidade específica (por exemplo, "São Paulo"), mostrando o nome do restaurante, o nome do prato e o preço.
SELECT r.nome AS nome_restaurante, p.nome AS nome_prato, p.preco
FROM restaurante r
INNER JOIN pratos p ON r.id = p.FK_restaurante_id WHERE r.cidade = 'São Paulo'; 
-- error

# Liste os clientes que fizeram pedidos em restaurantes localizados em cidades diferentes da cidade onde moram, mostrando o nome do cliente, o nome do restaurante e a cidade do restaurante.

# DESAFIO
# Encontre os clientes que pediram o mesmo prato em diferentes restaurantes, listando o nome do cliente, o nome do prato e os restaurantes onde o prato foi pedido.