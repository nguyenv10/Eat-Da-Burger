'use strict';
var connection = require('./connection.js');

//Declare an object
var Burger = function(burger){
    this.burger_name = burger.burger_name;
    this.devoured = burger.devoured;
};


/*
* Method name insertOne
* @parameters newBurger as object and result as function
* This function will be called with the data inserted by user.
* */
Burger.insertOne = function insertOne(newBurger, result){
    //Insert query
    connection.query("INSERT INTO `burgers` set ?", newBurger, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};


/*
 * Method name selectAll
 * @parameters result as function
 * This function will be called to select all data from burgers table
 * */

Burger.selectAll = function selectAll(result){
    //select query
    connection.query("SELECT * FROM `burgers`", (err, res) => {
        if(err){
            console.log("error: ", err);
        }
        result(res);
    });
};

/*
 * Method name UpdateOne
 * @parameters id as number
 * This function will be called to update data for that id
 * */
Burger.UpdateOne = function(id, result){

    //update query
    connection.query("UPDATE `burgers` SET devoured = ? WHERE id = ?", [1, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Burger;

