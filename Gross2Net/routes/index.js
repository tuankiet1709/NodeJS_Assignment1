const express = require('express')

const homeController = require('../controllers/homeController');

module.exports = function(app){
    app.get('/',homeController)
    app.post('/',homeController)
}