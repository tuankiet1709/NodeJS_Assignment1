const fileUtil = require('./fileutils');
const path = require('path');
const { prompt } = require('enquirer');
const exec = require("child_process").exec;
const generate_database = require("./database_generator")

async function generate_mvc(){
  const response = await prompt({
    type: 'input',
    name: 'projectName',
    message: 'Please enter project name'
  });

  const projectName = response.projectName;
    // default data folder
  const dataFolder = path.resolve(`./${projectName}`) + path.sep,
      controllerFolder = path.resolve(`./${projectName}/controller`) + path.sep,
      viewFolder = path.resolve(`./${projectName}/view`) + path.sep,
      modelFolder = path.resolve(`./${projectName}/model`) + path.sep;

  // store folder available
  this.folder = await fileUtil.folderUsable(dataFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(controllerFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(viewFolder);
  if (!this.folder) return;

  this.folder = await fileUtil.folderUsable(modelFolder);
  if (!this.folder) return;

  console.log(dataFolder);

  child = exec(`npm install --prefix ./${projectName} express --save`, function (error, stdout, stderr) {
    if(error != null) {
      console.log(`exec error: ${error}`);
    }
    console.log('Install successful');
  })

  generate_database.generate_database(dataFolder, projectName);
}

module.exports = { generate_mvc }