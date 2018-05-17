const mongoose = require('mongoose'), 
      Cake = mongoose.model('Cake');

const cakes = require('../controllers/cakes.js')

module.exports = function(app){

    //  root
    app.get('/cakes', function(req, res){
        cakes.index(req, res);
    });

    // create
    app.post('/cake/', function(req, res){
        console.log("I am at routes.js - create");
        cakes.create(req, res);
    });

    // // show
    // app.get('/task/:id/', function(req, res){
    //     tasks.show(req, res);
    // });

    // // remove
    // app.delete('/task/:id', function(req, res){
    //     tasks.remove(req, res);
    // });

     // update
     app.put('/cake/', function(req, res){
        console.log("I am at routes.js - update");
        cakes.update(req, res);
    });

}        