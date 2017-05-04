const connection = require('../config/connection.js');

function printQuestionMarks(num){
    const arr = [];

    for (const i=0; i<num; i++){
        arr.push('?')
    }

    return arr.toString();
}

function objToSql(ob){
    //column1=value, column2=value2,...
    const arr = [];

    for (const key in ob) {
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}

const orm = {
    all: function(tableInput, cb){
        const queryString = 'SELECT * FROM ' + tableInput;

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    create: function(table, col, vals, cb){
        const queryString = 'INSERT INTO ' + table;
        queryString = queryString + ' (';
        queryString = queryString + col.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ') ';

        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb){
        const queryString = 'UPDATE ' + table;
        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;