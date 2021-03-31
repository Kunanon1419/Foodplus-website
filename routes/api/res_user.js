const express = require('express');
const router = express.Router();
const res_users = require('../../res_users');

router.post('/', (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        tel: req.body.tel,
        email: req.body.email,
        restaurant_name: req.body.restaurant_name,
        restaurant_type_name: req.body.restaurant_type_name,
        location: req.body.location,
        address: req.body.address,
        province: req.body.province,
        ampur: req.body.ampur,
        district: req.body.district,
        password: req.body.password,
        url_Copy_Id_card_number: req.body.url_Copy_Id_card_number,
        url_Restaurant_business_license: req.body.url_Restaurant_business_license,
        url_Copy_res_house_registration: req.body.url_Copy_res_house_registration,
        url_Restaurant_Photo: req.body.url_Restaurant_Photo,
        url_Copy_bank_book: req.body.url_Copy_bank_book
    }
    if (!newUser.first_name || !newUser.email) {
        return res.status(400).json({
            msg: "Please include a name and email"
        });
    }
    //res_users.push(newUser);
    res.json(newUser);
    res.redirect('/');
})
module.exports = router;