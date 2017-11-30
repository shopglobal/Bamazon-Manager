CREATE DATABASE nstock;
USE nstock;

CREATE TABLE products(
  item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) DEFAULT 0,
  quantity_on_hand INTEGER(6) DEFAULT 0,
  nov16_sales DECIMAL(10, 2) DEFAULT 0,
  dec16_sales DECIMAL(10, 2) DEFAULT 0,
  jan17_sales DECIMAL(10, 2) DEFAULT 0,
  feb17_sales DECIMAL(10, 2) DEFAULT 0,
  mar17_sales DECIMAL(10, 2) DEFAULT 0,
  apr17_sales DECIMAL(10, 2) DEFAULT 0,
  may17_sales DECIMAL(10, 2) DEFAULT 0,
  jun17_sales DECIMAL(10, 2) DEFAULT 0,
  jul17_sales DECIMAL(10, 2) DEFAULT 0,
  aug17_sales DECIMAL(10, 2) DEFAULT 0,
  sep17_sales DECIMAL(10, 2) DEFAULT 0,
  oct17_sales DECIMAL(10, 2) DEFAULT 0,
  PRIMARY KEY (item_id)
);