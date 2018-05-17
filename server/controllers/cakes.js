const mongoose = require('mongoose'),
Cake = mongoose.model('Cake');

module.exports = 
{
    index: function(req, res){
        Cake.find({}, function(err, cakes){
            if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
            }
            else {
            res.json({message: " Show all, Success", data: cakes})
            }
        })
    },

    create: function(req, res){
        var cake = new Cake();
        console.log(req.body); // for using the submit form, we use req.body not req.params
        cake.name = req.body.name;
        cake.image_url = req.body.image_url;

        cake.save(function(err){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else
            {
                res.json({message:"New Cake added" ,data: cake});
            }
        })
    },

    // show: function(req, res){
    //     console.log('req.parmas', req.params);
    //     Task.findOne({_id: req.params.id}, function(err, data){
    //         if(err){
    //             console.log("Got an error", err.message);
    //             res.json({message: "Error", error: err});
    //         } else if(!data) {
    //             res.json({message: "MongoDB could not find one."});
    //         }
    //         else {
    //             res.json({message:"Success", info:data});
    //         }
    //     })
    // },

    // remove: function(req, res){
    //     // console.log('req.parmas', req.params);
    //     Task.remove({_id: req.params.id}, function(err, data){
    //         if(err){
    //             console.log("Got an error", err.message);
    //             res.json({message: "Error", error: err});
    //         } else {
    //             res.json({message:"Success", info:data});
    //         }
    //     })
    // },
    
    update: function(req, res){
        console.log('req.body', req.body);
        Cake.findOne({_id: req.body.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            } else {
                data.rating = req.body.rating;
                data.comment = req.body.comment;
                data.save(function(err){
                    if(err){
                        console.log("Got an error", err.message);
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message:"Success", info:data});
                    }
                })
            }
        })
    },
}

