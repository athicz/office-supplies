# office-supplies
Installation
1. install node v.20.13.1
2. npm install -g @angular/cli
3. install java jdk 17 
https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
4. install mysql or any dbms for local database

Introduction
1. clone repository web and api
2. for web after cloned npm i then ng s to run
3. for api after cloned right click on the project select maven and choose update project then right click on the project again go to run as and choose spring boot app (when using Spring tool suite)
4. you can configure data source in application.properties file for configure database connection

for set up database 
scripts for create table and insert samples data

FOR MYSQL CREATE TABLE
*********************************************************************************************
-- `office-supplies`.supplies definition

CREATE TABLE `supplies` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `item_detail` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(24) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serial_number` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
**********************************************************************************************
-- `office-supplies`.users definition

CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(24) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
**********************************************************************************************

FOR MYSQL INSERT DATA
**********************************************************************************************
INSERT INTO users
(id, user_name, password, name, status, create_date, update_date)
VALUES(1, 'admin', '1234', 'Admin', '1', '2024-05-23 01:05:42', '2024-05-23 01:05:42');
INSERT INTO users
(id, user_name, password, name, status, create_date, update_date)
VALUES(2, 'new', '4321', 'New', '1', '2024-05-22 19:32:23', '2024-05-22 19:32:23');
INSERT INTO users
(id, user_name, password, name, status, create_date, update_date)
VALUES(3, 'jame', '7890', 'James', '1', '2024-05-22 19:33:55', '2024-05-22 19:33:55');
**********************************************************************************************
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(1, 'Furniture', 'Desk', '2024-05-22', '2024-05-22 18:06:28', '2024-05-22 18:06:28', 'Height 1 m, Width 1.2 m, Length 2m', 'Available', '02001');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(2, 'Document storage', 'Locker', '2024-05-18', '2024-05-20 18:06:28', '2024-05-22 19:57:34', 'Height 2 m, Width 1.2 m, Length 1.2m', 'Available', '01001');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(3, 'IT equipment', 'Computer', '2024-05-21', '2024-05-21 18:06:28', '2024-05-21 18:06:28', 'Dell PC Desktop', 'Available', '03001');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(4, 'Document storage', 'Document folder', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Height 20 cm, Width 12 cm, Length 5cm', 'Available', '01002');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(5, 'Document storage', 'Shelf', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Height 1 m, Width 1.2 m, Length 2m', 'Available', '01003');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(6, 'Document storage', 'Drawer storage cabinet', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Height 1.2 m, Width 1.2 m, Length 2m', 'Available', '01004');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(7, 'Furniture', 'Sofa', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Height 2 m, Width 1.2 m, Length 1.2m', 'Available', '02002');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(8, 'Furniture', 'Conference table', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Height 1 m, Width 1.2 m, Length 5m, Radius 3m', 'Available', '02003');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(9, 'Furniture', 'Working chair', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Height 0.5 m, Width 1 m, Length 1 m', 'Busy', '02004');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(10, 'IT equipment', 'Printer', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'HP Printer', 'Busy', '03002');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(11, 'IT equipment', 'Document shredder', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Panasonic', 'Busy', '03003');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(12, 'IT equipment', 'Extension plug', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Data', 'Busy', '03004');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(13, 'IT equipment', 'USB Drive', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Sandisk', 'Available', '03005');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(14, 'IT equipment', 'Laptop', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Lenovo', 'Busy', '03006');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(15, 'Consumables', 'Pen', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Lancer', 'Busy', '04001');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(16, 'Consumables', 'A4 Papers', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Double A', 'Available', '04002');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(17, 'Consumables', 'Stapler', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'BeA', 'Busy', '04003');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(18, 'Consumables', 'Scissors', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'ONE ', 'Available', '04004');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(19, 'Cleaning', 'Soap', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Lux', 'Available', '05001');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(20, 'Cleaning', 'Broom', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Cotswold', 'Busy', '05002');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(21, 'Cleaning', 'Bin', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Plastic', 'Available', '05003');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(22, 'Cleaning', 'Tissue Paper', '2024-05-21', '2024-05-22 20:52:24', '2024-05-22 20:52:23', 'Delta', 'Available', '05004');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(28, 'Consumables', 'Pencil', '2024-05-18', '2024-05-22 17:11:49', '2024-05-22 17:11:49', 'length 7 cm', 'Available', '04005');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(29, 'Cleaning', 'Broomssss', '2024-05-16', '2024-05-22 17:32:14', '2024-05-22 18:01:02', 'Cotswold', 'Available', '05004');
INSERT INTO supplies
(id, `type`, name, order_date, create_date, update_date, item_detail, status, serial_number)
VALUES(30, 'Cleaning', 'Broombomer', '2024-05-17', '2024-05-22 17:38:57', '2024-05-22 17:59:16', 'Cotswold', 'Available', '05003');
