DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INT(10) NOT NULL AUTO_INCREMENT,
	item_id INT(10) DEFAULT NULL,
    product_name VARCHAR(100) DEFAULT NULL,
    department_name VARCHAR (100) DEFAULT NULL,
    price INT(10) DEFAULT NULL,
    stock_quantity INT(10) DEFAULT NULL,
    PRIMARY KEY(id)
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "shower curtain", "home", 15, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "USB Flash Drive", "computers", 20, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "water filter", "home", 30, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "ASUS Gaming Laptop", "computers", 1300, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Microwave", "home", 40, 6);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Cat Toy", "pets", 5, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Japanese Sencha Tea", "food", 15, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Catnip", "pets", 7, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Ethiopian Coffee", "food", 15, 14);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Dog Bone", "pets", 5, 20);