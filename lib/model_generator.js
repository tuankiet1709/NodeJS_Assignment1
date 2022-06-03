const fs = require('fs');

async function generate_mongos_models(projectName){
  
  const entitiesDir = `./${projectName}/models/entities/user.js`;
  
  fs.writeFile(entitiesDir, 
    `
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const userSchema = new Schema({
        firstName: String,
        lastName: String,
        age: Number,
        grossSalary: Number,
        netSalary: Number
    });
    
    const User = mongoose.model("User", userSchema);
    module.exports = User;
    `, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}

async function generate_mysql_models(projectName){
  
  const entitiesDir = `./${projectName}/models/entities/user.js`;
  
  fs.writeFile(entitiesDir, 
    `
    function CreateUserTable(knex) {
      knex.schema
        .createTable("User", function (table) {
          table.increments("id").primary();
          table.string("firstName");
          table.string("lastName");
          table.integer("age");
          table.integer("grossSalary");
          table.integer("netSalary");
        })
        .then(function () {
          console.log("User table created");
          knex.destroy();
        });
    }
    
    module.exports = {
      CreateUserTable,
    };
    `, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}


module.exports = {generate_mongos_models,generate_mysql_models};