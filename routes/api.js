const express = require('express')
const router = express.Router()
const Meet = require('../models/schedule')

//get request
router.get('/meet', function(req, res, next){
    res.render(__dirname,'views/contact')
    /*Meet.find({}).then(function(meet){
        res.send(meet);
    });*/
});

//post request (adding new meeting)
router.post('/meet', function(req, res, next){
    Meet.create(req.body).then(function(meet){
        res.send(meet);
    }).catch(next);
});

//update a meeting in db
router.put('/meet/:id', function(req, res, next){
    Meet.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(meet){
        res.send(meet);
      });
});

//delete a meeting from database
router.delete('/meet/:id', function(req, res, next){
    Meet.findByIdAndRemove({_id: req.params.id}).then(function(meet){
        res.send(meet);
    });
});

module.exports = router;
