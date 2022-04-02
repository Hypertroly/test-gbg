
use browsergames;
 
CREATE TABLE game(
nome varchar(45) NOT NULL,
url varchar(255) NOT NULL,
urlvideo varchar(255) DEFAULT NULL,
descricao varchar(255) NOT NULL,
categoria varchar(45) NOT NULL,
PRIMARY KEY (nome)
);