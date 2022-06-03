## Installation
### app-cli

install app-cli use:
Some basic Git commands are:
```
npm i -g
```
Then use command line to use app-cli
```
app-cli help: to show all command line
app-cli mvc: to create project mvc
```
To create a mvc:
 1. Input project name
 2. Choose database (mysql or mongodb)
 3. Input database connection
    - with MySQL: 
        ```
        host: localhost,
        user: root,
        password: root,
        port: 33060,
        charset: "utf8",
        database: SalaryChange,
        ```  
    - With MongoDB:
    ```
        host: localhost,
        port: 27017
        database: SalaryChange,
    ```  
 4. cd project_name
 5. run seed data
    ```
       npm run seed 
    ```   
 6. run project
    ```
       npm start
    ```    
 7. access http://localhost:3000
### Web Gross to Net
 1. cd Gross2Net
 2. Run
    ```
       npm i
    ```  
 3. Create file .env and copy content .env_example to .env
 4. run docker
    ```
       docker compose up
    ```  
 5. run seed data
    ```
       npm run seed 
    ```   
 6. run project
    ```
       npm start
    ```    
 7. access http://localhost:3000