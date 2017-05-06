// dependency declarations
const express = require('express');
const router = express.Router();
const colors = require('colors');

// model import
const burgers = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
    burgers.all(function (data) {
        let allBurgers = {burger: data};
        console.log(('CTLR all response     = ' + JSON.stringify(allBurgers, null, 0)).inverse.green);
        res.render('index', allBurgers);
    });
});

router.post('/create', function (req, res) {
    burgers.create(['burger_name'], [req.body.burger_type], function (data) {
        res.redirect('/');
        console.log(('CTLR create request   = ' + JSON.stringify(req.body)).green);
        console.log(('CTLR create response  = ' + JSON.stringify(data, null, 0)).inverse.green);
    })
});

router.post('/update/:id', function (req, res) {
    burgers.update(['devoured'], [req.params.id], function (data) {
        res.redirect('/');
        console.log(('CTLR update request   = ' + JSON.stringify(req.body)).green);
        console.log(('CTLR update response  = ' + JSON.stringify(data, null, 0)).inverse.green);
    })
});

router.post('/delete/:id', function (req, res) {
    burgers.delete([req.params.id], function (data) {
        console.log(('CTLR update request   = ' + JSON.stringify(req.body)).green);
        console.log(('CTLR update response  = ' + JSON.stringify(data, null, 0)).inverse.green);
        res.redirect('/');
    })
});

// Export routes for server.js to use.
module.exports = router;