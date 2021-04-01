const express = require('express');
const router = express.Router();
const db = require('../api/db_connection');
const uuid = require('uuid');

router.post('/', (req, res) => {
    const restaurant_info = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        tel: req.body.tel,
        email: req.body.email,
        restaurant_name: req.body.restaurant_name,
        restaurant_type_name: req.body.restaurant_type_name,
        location: req.body.location,
        address: req.body.address,
        Id_card_number:req.body.Id_card_number,
        province: req.body.province,
        ampur: req.body.ampur,
        district: req.body.district,
        password: req.body.password,
        url_Copy_Res_Id_card_number: req.body.url_Copy_Res_Id_card_number,
        Id_exp_datepicker:req.body.Id_exp_datepicker,
        url_Restaurant_business_license: req.body.url_Restaurant_business_license,
        url_Copy_res_house_registration: req.body.url_Copy_res_house_registration,
        url_Restaurant_Photo: req.body.url_Restaurant_Photo,
        url_Copy_bank_book: req.body.url_Copy_bank_book
    }
    db.execute("INSERT INTO `Merchant` VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [
                uuid.v4(), restaurant_info.email, restaurant_info.password, restaurant_info.first_name, restaurant_info.last_name, restaurant_info.location,
                restaurant_info.Id_card_number, restaurant_info.tel, 'รอดำเนินการ', 'ไทยพาณิชย์', '0123456789', restaurant_info.url_Copy_Res_Id_card_number,
                restaurant_info.url_Copy_res_house_registration, 000000,  0,restaurant_info.url_Copy_bank_book,restaurant_info.Id_exp_datepicker
            ])
        .then(result => {
            res.send(`your account has been created successfully, Now you can <a href="/">Home page</a>`);
        }).catch(err => {
            // THROW INSERTING USER ERROR'S
            if (err) throw err;
        });
    //res_users.push(newUser);
    // res.json(restaurant_info);
    // res.redirect('/');
})
module.exports = router;