const fs = require('fs');

async function generate_seed_mongo(projectDir, projectName){
  
  const seedDir = `./${projectName}/models/seed_data/user_initial_data.js`,
        dirConnection = `${projectDir}/models/dbContext.js`;

  fs.writeFile(seedDir, 
    `const seedUsers = [
        {
            firstName: 'Cong',
            lastName: 'Nguyen',
            age: 20,
            grossSalary: 0,
            netSalary: 0
        },
        {
            firstName: 'A',
            lastName: 'Nguyen',
            age: 20,
            grossSalary: 0,
            netSalary: 0
        },
        {
            firstName: 'Lam',
            lastName: 'Dang',
            age: 20,
            grossSalary: 0,
            netSalary: 0
        },
        {
            firstName: 'Anh',
            lastName: 'Pham',
            age: 20,
            grossSalary: 0,
            netSalary: 0
        },
    ]
    module.exports = { seedUsers };
    
    `, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

    // var data = fs.readFileSync(dirConnection).toString().split("\n");
    // data.splice(0, 0, 
    //   ``);
    // var text = data.join("\n");
    
    // fs.writeFile(dirConnection, text, function (err) {
    // if (err) return err;
    // });

    // fs.appendFile(dirConnection,
    //     `
    //     const seedDB = async () => {
    //         await User.deleteMany({});
    //         await User.insertMany(seedUsers);
    //     }

    //     seedDB().then(() => {
    //         mongoose.connection.close();
    //     })
    //     `,(err) => {
    //         if(err) {
    //             console.log(err);
    //         }
    //     }
    // )
}

async function generate_seed_mysql(projectDir, projectName){
  
    const seedDir = `./${projectName}/models/seed_data/user_initial_data.js`,
          dirConnection = `${projectDir}/models/dbContext.js`;
  
    fs.writeFile(seedDir, 
      `function UserData(knex) {
        const users = [
          {
            firstName: "A",
            lastName: "Nguyen Van",
            age: 25,
            grossSalary: 20000000,
            netSalary: 17460000,
          },
          {
            firstName: "B",
            lastName: "Tran Van",
            age: 57,
            grossSalary: 50000000,
            netSalary: 41001750,
          },
          {
            firstName: "C",
            lastName: "Lam Van",
            age: 61,
            grossSalary: 15000000,
            netSalary: 13303750,
          },
        ];
        knex("User")
          .insert(users)
          .then(() => console.log("data inserted"))
          .catch((err) => {
            console.log(err);
            throw err;
          })
          .finally(() => {
            knex.destroy();
          });
        }
        
        module.exports = {
        UserData
        }
      
      `, function (err) {
          if (err) throw err;
          console.log('File is created successfully.');
        });
  
//       var data = await fs.readFileSync(dirConnection).toString().split("\n");

//       data.splice(0, 0, 
//         `const { CreateUserTable } = require("./entities/user");
// const { UserData } = require("./seed/user_initial_data");
//         `);
//       var text = data.join("\n");
      
//       await fs.writeFile(dirConnection, text, function (err) {
//       if (err) return err;
//       });
  
//       await fs.appendFile(dirConnection,
// `CreateUserTable(knex);
// UserData(knex);      
//           `,(err) => {
//               if(err) {
//                   console.log(err);
//               }
//           }
//       )
  }
module.exports = {generate_seed_mongo, generate_seed_mysql};