# CloudProject1
**Cloud Project**

A three tier web application using Amazon Web Service Platform to store,
upload and display the files.

Details:

-   University Name: [San Jose State University](http://www.sjsu.edu/)

-   Course: [Cloud
    Technologies](http://info.sjsu.edu/web-dbgen/catalog/courses/CMPE281.html)

-   Professor [Sanjay Garje](https://www.linkedin.com/in/sanjaygarje/)

-   ISA: [Divyankitha Urs](https://www.linkedin.com/in/divyankithaur/)

-   Student: [Vidhi Sharma](https://www.linkedin.com/in/vidhi-sharma-/)

**Prerequisite: **

All the users should have account in AWS and should also have the access
keys to add and retrieve the files.

The repository contains a three tier JAVA application which is deployed
on AWS cloud platform.

The application is a simple CRUD customer management app built using
Spring Boot and Angular JS, deployed on AWS cloud(mainly uses S3,RDS and
EC2).

The Customer can create an account directly by storing entering the
details, the customer details will be stored in RDS (MySQL database
instance) and the files uploaded will be stored in S3 storage which will
generate a unique key and a public URL. The public URL will be linked
with the customer data hence the customer can view or download the file.

![Home Page](https://github.com/sharma-vidhi/CloudProject1/blob/master/src/HomePageScreen.png)

Fig1:Home Page

![User Page](https://github.com/sharma-vidhi/CloudProject1/blob/master/src/CustomerCreateScreen.png)

Fig 2:Page to create a user and upload a file

![View Page](https://github.com/sharma-vidhi/CloudProject1/blob/master/src/ViewCustomerScreen.png)

Fig 3:Page to View the user

To run the application on local servers (like Tomcat), the key
attributes and the account details can be given as environment
variables.

![variables](https://user-images.githubusercontent.com/17009702/31973836-ed5b3652-b8dc-11e7-8b90-2ccc4a79881b.png)

Fig 4:Ecplise window to set the environment variables

AWS credentials are to be added as environment variables while running
the configuration.

{

Database\_name:

Database\_indetifier:

IAMUser\_password:

Access Key:

Secret Key:

}
