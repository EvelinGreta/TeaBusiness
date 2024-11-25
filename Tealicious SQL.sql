DROP SCHEMA tealicious;
CREATE SCHEMA IF NOT EXISTS tealicious;

USE tealicious;

CREATE TABLE IF NOT EXISTS Products(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50),
country_of_origin VARCHAR(50),
caffeine_content VARCHAR(20),
price FLOAT DEFAULT 1,
in_stock BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS Customers(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
customer_name VARCHAR(50),
address VARCHAR(50),
telephone VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS Orders(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
cost FLOAT,
order_type VARCHAR(50),
date_placed DATE,
customer_id INT,
FOREIGN KEY (customer_id) REFERENCES Customers (id)
);

CREATE TABLE IF NOT EXISTS Order_Items(
id INT PRIMARY KEY AUTO_INCREMENT,
orders_id INT,
product_id INT,
FOREIGN KEY (orders_id) REFERENCES Orders (id), 
FOREIGN KEY (product_id) REFERENCES Products (id)
);

CREATE TABLE IF NOT EXISTS Suppliers (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
supplier_name VARCHAR(50) NOT NULL,
contact_name VARCHAR(50),
telephone VARCHAR(20),
email VARCHAR(50),
country VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Product_Suppliers (
id INT PRIMARY KEY AUTO_INCREMENT,
product_id INT,
supplier_id INT,
supply_price DECIMAL(10, 2),
FOREIGN KEY (product_id) REFERENCES Products(id),
FOREIGN KEY (supplier_id) REFERENCES Suppliers(id)
);

use tealicious;
SELECT * FROM Products;
