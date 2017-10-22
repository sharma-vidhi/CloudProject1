CREATE SCHEMA IF NOT EXISTS rds_db DEFAULT CHARACTER SET utf8;
USE rds_db;

CREATE TABLE IF NOT EXISTS rds_db.app_updation (
  id INT NOT NULL AUTO_INCREMENT,  
  start DATE NOT NULL,
  tupdate DATE NOT NULL,
 PRIMARY KEY (id));
  
CREATE TABLE IF NOT EXISTS rds_db.app_customer_image (
  id INT NOT NULL AUTO_INCREMENT,
  s3_key VARCHAR(200) NOT NULL,
  url VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id));  
  
CREATE TABLE IF NOT EXISTS rds_db.app_user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  description VARCHAR(40) NULL,
  customer_image_id INT NOT NULL,
  address_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_UPDATION_ID
    FOREIGN KEY (updation_id)
    REFERENCES rds_db.app_updation (id),
  CONSTRAINT FK_USER_IMAGE_ID
    FOREIGN KEY (user_image_id)
    REFERENCES rds_db.app_user_image (id));    