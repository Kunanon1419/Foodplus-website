/**
 * Module dependencies.
 */
const express = require('express');
const path    = require('path');
const app     = express();
const cokieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const moment = require('moment');

const PORT    = process.env.PORT || 5000;
//const dbConnection = require('./db_root_connection');

/* Express middleware*/
const { body, validationResult } = require('express-validator');
/* Custom Middleware*/
const logger  = require('./middleware/logger');
/*Template engine*/
const exphbs  = require('express-handlebars');
/*set up api */
const res_users = require('./res_users');



/* BodyParser */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/**
 * set up environment
 */
// set up public and views folder
app.use(express.static(path.join(__dirname,'views'))); 
app.use(express.static(path.join(__dirname,'public')));
app.use('/auto_province', express.static(__dirname + '/public/auto_province'));
app.use('/json', express.static(__dirname + '/public/auto_province/json'));
/* import data */
const users   = require('./Users');
const res_type = require('/js/restaurant_type');

//set up middleware
app.use(logger);

// set up server log
app.listen(PORT,()=>{console.log('Server is running on port '+ PORT)});

// set up Template engine(Handles Middleware)
app.engine('handlebars', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(__dirname,'views/layouts'),
    partialsDir: path.join(__dirname,'views/partials')
}));
app.set('view engine', 'handlebars');

app.get('/index',(req,res)=>{
    res.render('index',{
        title: 'user app',
        users
    })
})

app.use('/api/res_user',require('./routes/api/res_user'));
app.use('/api/users', require('./routes/api/users'));

//Route
    // Home route
app.get('/', (req, res)=>{
    res.render('Home',{
        title: 'FoodPlus',
        layout:'main.handlebars',// different layout.
    });
})


    // Restaurant register route
app.get('/res_register',(req,res)=>{
    res.render('Restaurant_register',{
        res_type,
    })
})


    // Driver register route
app.get('/dri_register',(req,res)=>{
    res.render('Driver_register')
})
    // Driver login route
app.get('/dri_login',(req,res)=>{
    res.render('Driver_Login')
})


// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
