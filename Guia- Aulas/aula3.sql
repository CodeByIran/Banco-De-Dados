create database segundobd;

use segundobd;

-- cliente(cpf, nome, tel)
-- pedido(cod, data, FK_cliente_cpf)
-- item(cod, nome, valor, FK_cat_cod)
-- categoria(cod, nome)
-- PedidoItem(FK_Pedido_cod)
-- PedidoItem(FK_item_cod)

create table cliente(
    tel int,
    cpf varchar(11),
    nome varchar(10),
    primary key(cpf)
);

create table categoria(
	cod int,
    nome varchar(10), 
    primary key(cod)
);

create table pedido(
    cod int,
    data date,
    FK_cliente_cpf varchar(11),
    primary key(cod),
    foreign key (FK_cliente_cpf) references cliente(cpf)
);


create table item(
    cod int,
    nome varchar(11),
    valor double,
    FK_categoria_cod int,
    primary key(cod),
    foreign key(FK_categoria_cod) references categoria(cod)
);

create table PedidoItem(
	FK_pedido_cod int,
    FK_item_cod int,
    primary key(FK_pedido_cod,  FK_item_cod),
     foreign key(FK_pedido_cod) references pedido(cod),
	 foreign key(FK_item_cod) references item(cod)
)