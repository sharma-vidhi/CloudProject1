CREATE SCHEMA IF NOT EXISTS dbname DEFAULT CHARACTER SET utf8;
USE rds_db;

CREATE TABLE IF NOT EXISTS dbname.app_updation (
  id INT NOT NULL AUTO_INCREMENT,  
  start DATE NOT NULL,
  tupdate DATE NOT NULL,
 PRIMARY KEY (id));
  
CREATE TABLE IF NOT EXISTS dbname.app_customer_image (
  id INT NOT NULL AUTO_INCREMENT,
  s3_key VARCHAR(200) NOT NULL,
  url VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id));  
  
CREATE TABLE IF NOT EXISTS dbname.app_user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  description VARCHAR(40) NULL,
  customer_image_id INT NOT NULL,
  
  PRIMARY KEY (id),
  CONSTRAINT FK_UPDATION_ID
    FOREIGN KEY (updation_id)
    REFERENCES dbname.app_updation (id),
  CONSTRAINT FK_USER_IMAGE_ID
    FOREIGN KEY (user_image_id)
    REFERENCES dbname.app_user_image (id));    