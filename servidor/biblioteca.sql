
DROP TABLE IF EXISTS autores;
CREATE TABLE autores(
	id_autor INT AUTO_INCREMENT,
	nombre VARCHAR(50), 
	apellidos VARCHAR(100),
	PRIMARY KEY(id_autor)
);

DROP TABLE IF EXISTS editoriales;
create table editoriales(
	id_editorial INT AUTO_INCREMENT,
	nombre VARCHAR(50),
	primary key(id_editorial)
);

drop table if exists bibliotecarios;
create table bibliotecarios(
	id_bibliotecario int auto_increment,
	usuario varchar(50) not null,
	contrasena varchar(50) not null,
	nombre varchar(50),
	apellidos varchar(100),
	primary key(id_bibliotecario)
);

drop table if exists clientes;
create table clientes(
	id_cliente int AUTO_INCREMENT,
	nombre varchar(50),
	apellidos varchar(50),
	primary key(id_cliente)
);

drop table if exists generos;
create table generos(
	tipo varchar(50),
	primary key(tipo)
);

drop table if exists idiomas;
create table idiomas(
	idioma varchar(50),
	primary key(idioma)
);

drop table if exists libros;
create table libros(
	isbn varchar(50),
	titulo varchar(50),
	idioma varchar(50),
	primary key(isbn),
	foreign key(idioma) references idiomas(idioma)
);

drop table if exists publica;
create table publica(
	id_editorial int,
	isbn varchar(50),
	primary key(id_editorial, isbn),
	foreign key(id_editorial) references editoriales(id_editorial),
	foreign key(isbn) references libros(isbn)
);

drop table if exists escribe;
create table escribe(
	id_autor int,
	isbn varchar(50),
	primary key(id_autor, isbn),
	foreign key(id_autor) references autores(id_autor),
	foreign key(isbn) references libros(isbn)
);
	
drop table if exists ejemplares;
create table ejemplares(
	id_ejemplar int AUTO_INCREMENT,
	isbn varchar(50),
	primary key(id_ejemplar),
	foreign key(isbn) references libros(isbn)
);

drop table if exists altas;
create table altas(
	id_bibliotecario int,
	id_ejemplar varchar(50),
	fecha_alta date,
	primary key(id_bibliotecario, id_ejemplar)
);

drop table if exists bajas;
create table bajas(
	id_bibliotecario int,
	id_ejemplar varchar(50),
	fecha_baja date,
	primary key(id_bibliotecario, id_ejemplar)
);

drop table if exists prestamos;
create table prestamos(
	id_bibliotecario int,
	id_cliente int,
	id_ejemplar int,
	fecha_prestamo date,
	fecha_devolucion date,
	primary key(id_bibliotecario, id_cliente, id_ejemplar),
	foreign key(id_bibliotecario) references bibliotecarios(id_bibliotecario),
	foreign key(id_cliente) references clientes(id_cliente),
	foreign key(id_ejemplar) references ejemplares(id_ejemplar)
);
