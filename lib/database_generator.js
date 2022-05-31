const { Select } = require('enquirer');
const exec = require("child_process").exec;
const fileUtil = require('./fileutils');
const fs = require('fs');
const path = require('path');

async function generate_database(projectDir, projectName){
  var dirConnection = `${projectDir}/model/dbContext.js`
  const prompt = new Select({
    name: 'database',
    message: 'Choose Database',
    choices: ['MySql', 'MongoDB']
  });
   
  prompt.run()
    .then(answer => {
      if(answer == 'MySql'){
          fs.writeFile(dirConnection, `const mysql = require('mysql');
          const con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "root",
              port: 32769
          });
          
          con.connect(function(err) {
              if (err) throw err;
              console.log("Connected!");
              con.query("CREATE DATABASE TestNode", (err, result) => {
                  if (err) throw err;
                  console.log("Database created");
              });
          });`, function (err) {
              if (err) throw err;

              child = exec(`npm install --prefix ./${projectName} mysql`, function (error, stdout, stderr) {
                if(error != null) {
                  console.log(`exec error: ${error}`);
                }
                console.log('Install successful');
              })

              console.log('File is created successfully.');
            });
      }
      else {
          fs.writeFile(dirConnection, `// To create DB, we need MongoClient object
              const mongoClient = require('mongodb').MongoClient;
              
              const url = "mongodb://localhost:27017/"
              
              mongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
                  if (err) throw err;
                  console.log("Connect to Database!");
              });`, function (err) {
                  if (err) throw err;
                  
                  child = exec(`npm install --prefix ./${projectName} mongodb`, function (error, stdout, stderr) {
                    if(error != null) {
                      console.log(`exec error: ${error}`);
                    }
                    console.log('Install successful');
                  })

                  console.log('File is created successfully.');
          });
      }
    } 
      )
    .catch(console.error);
}


module.exports = {generate_database};