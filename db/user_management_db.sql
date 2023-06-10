DROP IF EXISTS user_management_db;

CREATE DATABASE user_management_db;
USE user_management_db;

CREATE TABLE Users (
    id int not null auto_increment,
    first_name varchar(20),
    last_name varchar(20),
    email varchar(30),
    phone varchar(20),
    comments text,
    status varchar(20) not null default 'active', 
    primary key (id)
);