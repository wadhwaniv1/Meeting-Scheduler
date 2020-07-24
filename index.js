const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const exphbs  = require('express-handlebars');
const path = require('path')

const app = express()

//set up view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//static file
app.use('/public', express.static(path.join(__dirname,'public')));

//setting up mongodb
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true })
mongoose.Promise = global.Promise

//bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());   //middleware

//initialize routes middleware
app.use(routes);

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

//listen for reuests
app.listen(process.env.port || 4000, function(){
    console.log("Now listening to requests");
    });
