create database proyectofinal;

use proyectofinal;

create table puntajes (
idpuntaje int not null auto_increment,
nombre varchar(255),
email varchar(255) not null unique,
puntajefinal int,
fecha timestamp default current_timestamp,
primary key (idpuntaje)
);

create table mensajes (
idmensaje int not null auto_increment,
nombre varchar(255),
email varchar(255) not null unique,
mensaje varchar(10000),
fecha timestamp default current_timestamp,
primary key (idmensaje)
);


insert into puntajes (nombre, email, puntajefinal) values ('Juancho', 'juan@email.com', 1500);

insert into mensajes (nombre, email, mensaje) values ('Juancho', 'juan@email.com', 'Buesnas tardes, este es un mensaje de prueba!');

