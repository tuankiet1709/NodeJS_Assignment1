#!/usr/bin/env node

const generate_mvc = require('../lib/create_mvc_structure');
const generate_database = require('../lib/database_generator');
const program = require('commander');

switch(process.argv[2]){
    case "grmvc":
        generate_mvc.generate_mvc()
        break;
    case "grdb":
        generate_database.generate_database()
        break;
    case "help":
        console.log(process.argv);
        console.log(`Option:\n\tgrmvc: generate mvc structure\n\tgrdb: generate database
        `);
        break;
    default:
        console.log("use help to show list cli")
        break;
}

