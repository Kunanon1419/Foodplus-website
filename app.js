/**
 * Module dependencies.
 */
const express = require('express');
const path    = require('path');

const PORT    = process.env.PORT || 5000;
const cokieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const dbConnection = require('./db_root_connection');
const { body, validationResult } = require('express-validator');

const bodyParser = require('body-parser');
const moment = require('moment');
/*Template engine*/
const exphbs  = require('express-handlebars');
/* Middleware*/
const logger  = require('./middleware/logger');
const users   = require('./Users');

/*express app*/
const app     = express();

// all environments
    //  set the public (folder) as static in the server.js (include folder for using)
    app.use(express.static(path.join(__dirname,'views'))); 
    app.use(express.static(path.join(__dirname,'public')));
        //use logger middleware
    app.use(logger);
        //use USER api
    app.use('/api/users', require('./routes/api/users'));
        //server log
    app.listen(PORT,()=>{console.log('Server is running on port '+ PORT)});
    // Handles Middleware
    app.engine('handlebars', exphbs({
        defaultLayout:'main',
        layoutsDir: path.join(__dirname,'views/layouts'),
        partialsDir: path.join(__dirname,'views/partials')
    }));
    app.set('view engine', 'handlebars');

app.get('/test', (req, res) => {
    res.send('test server time ' + `${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
})

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
    res.render('Restaurant_register')
})


    // Driver register route
app.get('/dri_register',(req,res)=>{
    res.render('Driver_register')
})
    // Driver login route
app.get('/dri_login',(req,res)=>{
    res.render('Driver_Login')
})


//use Body parse middleware เอาไว้ล่างสุดไม่งั้น express render หน้าไม่ได้
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));
