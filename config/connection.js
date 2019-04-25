'user strict';

var mysql = require('mysql');

//mysql db connection
var connection = mysql.createConnection({
    host: 'localhost', //Your host name
    user: 'russel', //Your Database user name
    password: 'RusselBd12',//Your database password
    database: 'burgers_db' //Your database name
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
