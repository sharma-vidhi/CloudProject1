package com.cloud.samples.boot.config;

import org.springframework.cloud.aws.jdbc.config.annotation.EnableRdsInstance;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource("classpath:/aws-config.xml")
@EnableRdsInstance(databaseName = "rds_db", 
                   dbInstanceIdentifier = "rds-db2", 
				   password = "admin123")
public class AwsResourceConfig {

}