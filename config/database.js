const Mysql         = require('mysql');
const Constants     = require("./constants");

var connection      = Mysql.createConnection({
    "host" : "localhost",
    "user" : "root",
    "password" : "root",
    "database" : "surveys",
    "port" : 8889
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
