CREATE DATABASE projetIF27;
USE projetIF27;
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);
INSERT INTO user (id, username, password) values (1, "louis", "123"), (2, "vincent", "azerty");