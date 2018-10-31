var express = require('express');
var app = express();
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
	
var env = require('dotenv').load();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); 
 
app.use(passport.initialize());
 
app.use(passport.session()); 
 
 
app.get('/', function(req, res) {
 
    res.send('Server starting');
 
});
 
 
app.listen(5000, function(err) {
 
    if (!err)
        console.log("Server is live");
    else console.log(err)
 
});

var models = require("K://myacademic/team4/database-backend/models"); //CHANGE THIS dir


require('K://myacademic/team4/database-backend/config/passport/passport.js')(passport, models.user);

models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});