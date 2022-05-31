const { Select } = require('enquirer');
const exec = require("child_process").exec;
const fileUtil = require('./fileutils');
const fs = require('fs');
const { prompt } = require('enquirer');

async function generate_database(projectDir, projectName){
  var dirConnection = `${projectDir}/models/dbContext.js`
  const select = new Select({
    name: 'database',
    message: 'Choose Database',
    choices: ['MySql', 'MongoDB']
  });
   
  select.run()
    .then(async answer => {
      if(answer == 'MySql'){
        const question = [
          {
            type: 'input',
            name: 'host',
            message: 'Please enter your host'
          },
          {
            type: 'input',
            name: 'port',
            message: 'Please enter your port'
          },
          {
            type: 'input',
            name: 'user',
            message: 'Please enter user'
          },
          {
            type: 'password',
            name: 'password',
            message: 'Please enter password'
          },
          {
            type: 'input',
            name: 'database',
            message: 'Please enter database'
          }
        ];
        const response = await prompt(question);

        child = exec(`npm install --prefix ${projectName} mysql knex --save`, function (error, stdout, stderr) {
          if(error != null) {
            console.log(`exec error: ${error}`);
          }
        })

        fs.writeFile(dirConnection, 
          `const knex = require('knex')({
            client: 'mysql',
            connection: {
              host: ${response.host},
              port: ${response.port},
              user: ${response.user},
              password: ${response.password},
              database: ${response.database}
            }
          });`, function (err) {
              if (err) throw err;

              
              console.log('File is created successfully.');
            });
      }
      else {
        const response = await prompt(
          {
            type: 'input',
            name: 'port',
            message: 'Please enter your port'
          });

          console.log(`${projectName}`);
               
          child = exec(`npm install --prefix ${projectName} mongoose --save`, function (error, stdout, stderr) {
            if(error != null) {
              console.log(`exec error: ${error}`);
            }
          });

          await fs.writeFile(dirConnection, 
              `
              // To create DB, we need MongoClient object
              const mongoose = require('mongoose');
              
              const url = "mongodb://localhost:${response.port}/"
              
              mongoose.connect(url, {userNewUrlParser: true});
              `, function (err) {
                  if (err) throw err;

                  console.log('File is created successfully.');
          });
      }
    } 
      )
    .catch(console.error);
}


module.exports = {generate_database};