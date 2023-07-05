CREATE DATABASE Recette ;

USE Recette;

CREATE TABLE Utilisateurs (
  id_utilisateur INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(50),
  prenom VARCHAR(50),
  pseudo VARCHAR(25),
  mot_de_passe CHAR(32)
);


CREATE TABLE Frigo_Ingredients (
  id_utilisateur INT ,
  nom_ing VARCHAR(50),
  quantite Float,
  FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur)
);


CREATE USER Recette_user@localhost identified by 'not found' ;

GRANT ALL PRIVILEGES ON Recette.* to Recette_user ;