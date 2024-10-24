-- listar os estabelecimentos de uma determinada cidade  
-- tela explorar
select nome, endereco from Estabelecimento where cidade = 'São Paulo';

-- Mostrar as reservas de um determinado user... 
-- tela de reserva
select nome_servico, data_reserva, horario from Reserva where id_usuario = 1;

-- info do user, mostrando apenas o nome e email do user 
-- tela de perfil 
select nome, email from Usuario where id_usuario = 1;

-- listar o serviço de um unique estabelecimento 
-- tela de estabecimento 
select nome_servico from Servico where id_estabelecimento = 101;
