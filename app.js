/**
 * Module dependencies.
 */
const express = require('express');
const aws = require('aws-sdk');

const path = require('path');
const app = express();
const cokieSession = require('cookie-session');
const bcrypt = require('bcrypt');
const moment = require('moment');

const PORT = process.env.PORT || 5000;
//const dbConnection = require('./db_root_connection');

//aws.config.region = 'ap-southeast-1';
const S3_BUCKET = 'foodplus-file-storage';


/* Express middleware*/
const {
    body,
    validationResult
} = require('express-validator');
/* Custom Middleware*/
const logger = require('./middleware/logger');
/*Template engine*/
const exphbs = require('express-handlebars');
/*set up api */
const res_users = require('./res_users');

/* BodyParser */
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

/**
 * set up environment
 */
// set up public and views folder
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auto_province', express.static(__dirname + '/public/auto_province'));
app.use('/json', express.static(__dirname + '/public/auto_province/json'));
/* import data */
const users = require('./Users');
const res_type = require('./public/js/Restaurant_type');

//set up middleware
app.use(logger);

// set up server log
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
});

// set up Template engine(Handles Middleware)
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');



app.get('/index', (req, res) => {
    res.render('index', {
        title: 'user app',
        users
    })
})

app.use('/api/res_user', require('./routes/api/res_user'));
app.use('/api/users', require('./routes/api/users'));

//Route
// Home route
app.get('/', (req, res) => {
    res.render('Home', {
        title: 'FoodPlus',
        layout: 'main.handlebars', // different layout.
    });
})


// Restaurant register route
app.get('/res_register', (req, res) => {
    res.render('Restaurant_register', {
        res_type,
    })
})
/*
 * Respond to GET requests to /sign-s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
app.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3({
        accessKeyId:'AKIAYNSZO2JYHIT24K4J',
        secretAccessKey:'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',
        Bucket:'foodplus-file-storage',
        region:'ap-southeast-1'
    });
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const input_name  = req.query['input-name'];
    const tel = req.query['tel'];
    const s3Params = {
      Bucket: 'foodplus-file-storage',
      Key: `${input_name}-${tel}.${fileName}`,
      Expires: 60,
      ContentType: fileType,
      //ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        input_url:`#url_${input_name}`,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${input_name}-${tel}`
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  });


// Driver register route
app.get('/dri_register', (req, res) => {
    res.render('Driver_register')
})
// Driver login route
app.get('/dri_login', (req, res) => {
    res.render('Driver_Login')
})
