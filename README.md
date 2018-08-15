# spring-boot-angular6-Users

Spring Boot + Angular 6 + Spring Data JPA + MySQL CRUD App Example: The Tour of User

## Getting Started

### Prerequisites

You should install the following software on your own computer.

* JDK 1.8
* Maven
* MySQL
* Node.js (Node 10.7.0 or higher, together with NPM 3 or higher)
* Angular CLI

Create a database named "test" in MySQL and import "test.sql" file (script folder) into it. After that, configure username and password
in "application.properties" file.

### Build and run

Open a command prompt and navigate to the root folder, run the following command

```
mvn clean install
```

Then, cd into backend folder and run the spring boot application 

```
cd backend
mvn spring-boot:run
```

After that, open another command prompt and navigate to the folder frontend\src\main\frontend, run the angular application using 
angular CLI:

```
ng serve --o
```
It will automatically open your browser on http://localhost:4200/ (http://localhost:4200/dashboard/ in this case).

## Reference

* Angular6 and Spring Boot 
* Tour of Users (https://angular.io/tutorial)
* Spring Boot REST + Angular 6 + JPA + Hibernate + MySQL CRUD Example  
 

