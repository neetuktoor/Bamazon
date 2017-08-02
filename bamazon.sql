DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keurig", "Home Goods", 100, 15), ("Blender", "Home Goods", 75, 25), ("Laptop", "Electronics", 1000, 20), ("TV", "Electronics", 999, 10), ("Jeans", "Apparel", 40, 20), ("Dress", "Apparel", 30, 30), ("Necklace", "Accessories", 25, 5), ("Ring", "Accessories", 55, 15), ("Desk", "Furnitire", 60, 10), ("Lamp", "Furniture", 35, 10);