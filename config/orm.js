//Import MySQL connection
const connection = require("../config/connection.js");

//Object for all our SQL statement functions
let orm = {
    all: function (table, cb) {
        let queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(('ORM all response  = ' + JSON.stringify(result, null, 0)).inverse.red);
            cb(result);
        })
    },
    create: function (table, col, val, cb) {
        let queryString = `INSERT INTO ${table} (${col}) VALUES ('${val}');`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(('ORM create response  = ' + JSON.stringify(result, null, 0)).inverse.red);
            cb(result);
        })
    },
    update: function (table, col, id, cb) {
        let queryString = `UPDATE ${table} SET ${col} = true WHERE id = ${id};`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(('ORM update response   = ' + JSON.stringify(result, null, 0)).inverse.red);
            cb(result);
        })
    },
    delete: function (table, id, cb) {
        let queryString = `DELETE FROM ${table} WHERE id = ${id};`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(('ORM delete response   = ' + JSON.stringify(result, null, 0)).inverse.red);
            cb(result);
        })
    }
};

//Export the orm object for the model (burger.js)
module.exports = orm;
