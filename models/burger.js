'user strict';
var Burger = require('../config/orm.js');

/*
 * Method name list
 * @parameters req and res
 * This function will be called from controller. this will call SelectAll method of omr
 * render html based on the selected data
 * */

exports.list = function(req, res) {
    Burger.selectAll(function(burger) {
        res.render('index',{title:'Eat Da Burger',results:burger});
    });
};

/*
 * Method name create
 * @parameters req and res
 * This function will be called from controller. this will call insertOne method of omr
 * render html based on the selected data
 * */

exports.create = function (req, res) {
    let new_burger = new Burger(req.body);

    Burger.insertOne(new_burger, function () {
        res.redirect('/');
    });
};

/*
 * Method name update
 * @parameters req and res
 * This function will be called from controller. this will call UpdateOne method of omr
 * render html based on the selected data
 * */

exports.update = function(req, res) {
    Burger.UpdateOne(req.body.id, function() {
        res.redirect('/');
    });
};