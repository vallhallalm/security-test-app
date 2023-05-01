CREATE DATABASE projetIF27;
USE projetIF27;
CREATE TABLE `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(50) NOT NULL,
    `admin` BOOLEAN
) ENGINE='InnoDB' ;
INSERT INTO user (id, username, password, admin) values (1, "louis", "123", false), (2, "vincent", "azerty", false), (3, "bankman", "1957354826*A", true);

CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `value` float NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE='InnoDB';
INSERT INTO account (id, user_id, name, value) values (1, 1, "Livret A", 1000), (2, 1, "Compte courant", 125), (3, 2, "Compte chèque", 1000000);