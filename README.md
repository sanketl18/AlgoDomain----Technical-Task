# AlgoDomain----Technical-Task
E-Commerce web application created using spring boot (backend) and react (frontend).
This Web application is based on microservice architecture, Eureka server is used for registering microservice and for load balancing.
Rest template is used to consume json data from other microservices. exchange of json data is done by using rest template.
All the microservice are called using spring cloud Api gateway on a single port(9090).
This web application follows polygate architecture for databases. I use both SQL and NoSQL type of datbases, which are MySQL and MongoDB.
Appliction is protected with spring security and authentication is done using JWT (Java Web Token).
Spring Boot (Backend) is integrated with React (Frontend) using Axios library .


                        STEPS TO START THE APPLICATION
                        
   1) After downloading the zip file of this repository, unzip the zip file in your system.
   2) Import all microservices (one microservice in one go) in the STS (Spring Tool Suite).
   3) Open frontend folder in react and enter command "npm i node-modules" in terminal.
   4) This command will download node modules. Downloading part is now finished in react.
   5) Open STS and run all microservices.
   6) Open VS studio code, enter command "npm start" in terminal.
   7) After this, Web application will be available and running on port 3000.
   8) You will get two options, 1) login as Merchant or 2) login as Customer.
   9) Application is protected with security, do register yourself and use those credentials to login.
   10) Now experience the functionalities of application.
