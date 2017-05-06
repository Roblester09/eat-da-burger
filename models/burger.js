// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

let burgers = {
    all: function (cb) {
        orm.all('burgers', function (res) {
            console.log(('MODEL all response    = ' + JSON.stringify(res, null, 0)).inverse.cyan);
            cb(res);
        })
    },
    create: function (col, val, cb) {
        orm.create('burgers', col, val, function (res) {
            console.log(('MODEL create response = ' + JSON.stringify(res, null, 0)).inverse.cyan);
            cb(res);
        })
    },
    update: function(col, id, cb) {
        orm.update('burgers', col, id, function(res){
            console.log(('MODEL update response = ' + JSON.stringify(res, null, 0)).inverse.cyan);
            cb(res);
        })
    },
    delete: function(id, cb) {
        orm.delete('burgers', id, function(res){
            console.log(('MODEL delete response = ' + JSON.stringify(res, null, 0)).inverse.cyan);
            cb(res)
        })
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;