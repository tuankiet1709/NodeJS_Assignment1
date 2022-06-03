#!/usr/bin/env node

const {generate_mvc} = require('../lib/create_mvc_structure');

switch(process.argv[2]){
    case "mvc":
        generate_mvc();
        break;
    case "help":
        console.log(process.argv);
        console.log(`Option:\n\tmvc: generate mvc structure`);
        break;
    default:
        console.log(`use "help" to show list cli`)
        break;
}

