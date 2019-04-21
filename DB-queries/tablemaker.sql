DROP SCHEMA IF EXISTS inventory_qstrnx;
CREATE SCHEMA inventory_qstrnx;
USE inventory_qstrnx;

DROP TABLE IF EXISTS Item;
CREATE TABLE Item(
	item_id INT AUTO_INCREMENT NOT NULL,
	item_name VARCHAR(256) NOT NULL, 
	item_qty INT NOT NULL,
	item_amount DECIMAL(18,2) NOT NULL,

	PRIMARY KEY (item_id)
);
