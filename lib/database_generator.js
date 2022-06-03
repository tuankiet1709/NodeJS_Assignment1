const { Select } = require('enquirer');
const exec = require("child_process").exec;
const fileUtil = require('./fileutils');
const fs = require('fs');
const { prompt } = require('enquirer');
const { generate_mongos_models,generate_mysql_models } = require('./model_generator');
const { generate_seed_mongo, generate_seed_mysql } = require('./seed_generator');

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

        await fs.writeFile(dirConnection, 
          `const { CreateUserTable } = require("./entities/user");
  const { UserData } = require("./seed_data/user_initial_data");
  var conn = {
  host: "${response.host}",
  user: "${response.user}",
  password: "${response.password}",
  port: ${response.port},
  charset: "utf8",
  database: "${response.database}",
};

// connect without database selected
var knex = require("knex")({ client: "mysql", connection: conn });
CreateUserTable(knex);
UserData(knex);   
          `, function (err) {
              if (err) throw err;

              console.log('File is created successfully.');
        });
        generate_mysql_models(projectName);
        generate_seed_mysql(projectDir, projectName);
      }
      else {
        const question = [
          {
            type: 'input',
            name: 'port',
            message: 'Please enter your port'
          },
          {
            type: 'input',
            name: 'database',
            message: 'Please enter database'
          }
        ];
        const response = await prompt(question);
               
          child = exec(`npm install --prefix ./${projectName} mongoose --save`, function (error, stdout, stderr) {
            if(error != null) {
              console.log(`exec error: ${error}`);
            }
          });

          await fs.writeFile(dirConnection, 
              `
              // To create DB, we need MongoClient object
              const {seedUsers} = require('./seed_data/user_initial_data');
              const User = require('./entities/user')
              const mongoose = require('mongoose');
              
              const url = "mongodb://localhost:${response.port}/${response.database}"
              
              mongoose.connect(url)
                .then(() => console.log('Mongoose connection open'))
                .catch((err) => console.log(err));
              
              const seedDB = async () => {
                  await User.deleteMany({});
                  await User.insertMany(seedUsers);
              }
              
              seedDB().then(() => {
                  mongoose.connection.close();
              })
              `, function (err) {
                  if (err) throw err;

                  console.log('File is created successfully.');
          });
          generate_mongos_models(projectName);
          generate_seed_mongo(projectDir, projectName);
      }
    } 
      )
    .catch(console.error);
}


module.exports = {generate_database};