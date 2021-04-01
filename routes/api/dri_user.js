const express = require('express');
const router = express.Router();
const db = require('../api/db_connection');
const uuid = require('uuid');
router.post('/', (req, res) => {
    const driver_info = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        Id_card_number: req.body.Id_card_number,
        tel: req.body.tel,
        email: req.body.email,
        sex: req.body.sex,
        province: req.body.province,
        ampur: req.body.ampur,
        district: req.body.district,
        province_working: req.body.province_working,
        amphur_working: req.body.amphur_working,
        password: req.body.password,
        url_Money_transfer_slip: req.body.url_Money_transfer_slip,
        url_Copy_Driver_Id_card_number: req.body.url_Copy_Driver_Id_card_number,
        Id_exp_datepicker: req.body.Id_exp_datepicker,
        url_Copy_driver_license: req.body.url_Copy_driver_license,
        Driver_exp_datepicker: req.body.Driver_exp_datepicker,
        url_copy_Act_legislation: req.body.url_copy_Act_legislation,
        Act_legislation_exp_date: req.body.Act_legislation_exp_date
    }
    // INSERTING USER INTO DATABASE
    db.execute("INSERT INTO `Driver` VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [uuid.v4(), driver_info.email, driver_info.password, driver_info.first_name, driver_info.last_name, `${driver_info.province} ${driver_info.ampur} ${driver_info.district}`,
                driver_info.Id_card_number, driver_info.tel, 'รอดำเนินการ', 'ไทยพาณิชย์', '0123456789', '', 0, driver_info.url_Copy_Driver_Id_card_number,
                driver_info.url_Copy_driver_license, driver_info.url_copy_Act_legislation, driver_info.Id_exp_datepicker, driver_info.Driver_exp_datepicker,
                driver_info.Act_legislation_exp_date, '', 000000, 0
            ])
        .then(result => {
            res.send(`your account has been created successfully, Now you can <a href="/">Home page</a>`);
        }).catch(err => {
            // THROW INSERTING USER ERROR'S
            if (err) throw err;
        });
    // res.json(driver_info);
    // res.redirect('/');
})
module.exports = router;