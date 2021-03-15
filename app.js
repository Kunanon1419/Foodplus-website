/**
 * Module dependencies.
 */
const express = require('express');
const path    = require('path');
const app     = express();
const cokieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const PORT    = process.env.PORT || 5000;
const dbConnection = require('./db_root_connection');
/* Express middleware*/
const { body, validationResult } = require('express-validator');

const moment = require('moment');
/*Template engine*/
const exphbs  = require('express-handlebars');
/* Middleware*/
const logger  = require('./middleware/logger');
const users   = require('./Users');
const res_users = require('./res_users');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
// set up BodyParser Middleware

/**
 * set up environment
 */
// set up public and views folder
app.use(express.static(path.join(__dirname,'views'))); 
app.use(express.static(path.join(__dirname,'public')));

//set up middleware
app.use(logger);
app.use('/api/users', require('./routes/api/users'));

// set up server log
app.listen(PORT,()=>{console.log('Server is running on port '+ PORT)});

// set up Template engine(Handles Middleware)
app.engine('handlebars', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(__dirname,'views/layouts'),
    partialsDir: path.join(__dirname,'views/partials')
}));
app.set('view engine', 'handlebars');

// test express
app.get('/test', (req, res) => {
    res.send('test server time ' + `${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
})

// test api
// พังที่ form font-end มัน submit input ใน tag div ไม่ได้ ลองเสิจ [register form with multiple step]
app.use('/api/res_user',require('./routes/api/res_user'));

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
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
