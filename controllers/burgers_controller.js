'use strict';
module.exports = function (app) {
    let Burger = require('../models/burger.js');

    //Routers based on the method
    app.get('/',Burger.list); // call list function of burger model to fetch data and generate html
    app.post('/',Burger.create); //call create function of burger model to insert new record
    app.post('/devoured',Burger.update);//call update function of burger model to update record for selected id
};

