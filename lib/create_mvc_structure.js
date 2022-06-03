const fileUtil = require('./fileutils');
const path = require('path');
const fs = require('fs');
const { prompt } = require('enquirer');
const exec = require("child_process").exec;
const { generate_database } = require('./database_generator');


async function generate_mvc(){
  const response = await prompt({
    type: 'input',
    name: 'projectName',
    message: 'Please enter project name'
  });

  const projectName = response.projectName;
    // default data folder
  const dataFolder = path.resolve(`./${projectName}`) + path.sep,
      controllerFolder = path.resolve(`./${projectName}/controllers`) + path.sep,
      viewFolder = path.resolve(`./${projectName}/views`) + path.sep,
      modelFolder = path.resolve(`./${projectName}/models`) + path.sep,
      entitiesFolder = path.resolve(`./${projectName}/models/entities`) + path.sep,
      seedFolder = path.resolve(`./${projectName}/models/seed_data`) + path.sep,
      routesFolder = path.resolve(`./${projectName}/routes`) + path.sep;

  const packageDir = `./${projectName}/package.json`,
        indexDir = `./${projectName}/index.js`,
        controllerDir = `./${projectName}/controllers/homeController.js`,
        routeDir = `./${projectName}/routes/home.js`,
        viewDir = `./${projectName}/views/home.ejs`;

  // store folder available
  this.folder = await fileUtil.folderUsable(dataFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(controllerFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(viewFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(modelFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(routesFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(entitiesFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(seedFolder);
  if (!this.folder) return;

  //write file package.json
  fs.writeFile(packageDir, String.raw`
  {
    "name": "${projectName}",
    "version": "1.0.0",
    "description": "",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "nodemon index.js",
      "seed": "node ./models/dbContext"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    }
  }
  `, function (err) {
    if (err) throw err;
  });
  //generate index.js file
  fs.writeFile(
    indexDir,
    `
    const express = require('express')
    const app = express()
    app.set('view engine', 'ejs');

    app.use('/', require('./routes/home'));
    const port = 3000;
    app.listen(port, () => console.log(\`Server running on: http://localhost:\${port}\`))
    `,
    function (err) {
      if (err) throw err;
      console.log("index.js is created successfully.");
    }
  );

  fs.writeFile(
    controllerDir,
    `const homeView = (req, res) => {
      res.render("home",{
      });
    }
    
    module.exports = {
      homeView
    }`,
    function (err) {
      if (err) throw err;
    }
  );

  fs.writeFile(
    routeDir,
    `const express = require('express')
    const {homeView} = require('../controllers/homeController');
    const router = express.Router();
    router.get('/', homeView);
    
    module.exports = router;`,
    function (err) {
      if (err) throw err;
    }
  );

  fs.writeFile(
    viewDir,
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>MVC</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
    </head>
    <body>
      <h1 style="text-align:center;">HELLO WORLD</h1>
    </body>`,
    function (err) {
      if (err) throw err;
    }
  );

  //install package
  child = exec(`npm install --prefix ./${projectName} express ejs nodemon body-parser --save`, function (error, stdout, stderr) {
    if(error != null) {
      console.log(`exec error: ${error}`);
    }
  })

  generate_database(dataFolder, projectName);

  // // await 
  // function test(callback) {
    
  //   // console.log("hi2");
  //   setTimeout(function () {
  //       // console.log("hi3");
  //       generate_models(projectName);
  //       // Execute additional logics
  //       callback();
  //   }, 20000);
  // }

  // // console.log("hi1");

  // test(function () {
  //     setTimeout(function () {
  //       generate_seed(dataFolder, projectName);
  //         // console.log("hi4");
  //     }, 3000);
  // });
 


  // await new Promise(resolve => setTimeout(resolve, 5000));
  // await 
  // await new Promise(resolve => setTimeout(resolve, 5000));
  // await 
}

module.exports = {generate_mvc};